import * as regex from "./~regex";
import PATH from "path";
import fs from "fs";
import { FileExtension, FileName, getName } from "./file";

export class ProjectContext {
    #config: ProjectConfig;
    #scope: ProjectScopeRecord;

    public constructor(
        public readonly path: string,
    ) {
        if(!regex.path.test(path)) {
            path = PATH.resolve(path);
        }

        this.#config = new ProjectConfig(this);
        this.#scope = {
            source: ProjectScope.createFrom(this, ProjectScopeType.Source),
            dist: ProjectScope.createFrom(this, ProjectScopeType.Dist)
        }
    }

    //

    public get config() : ProjectConfig {
        return this.#config;
    }

    public get scope() : ProjectScopeRecord {
        return this.#scope;
    }

    //

    public exists() : boolean {
        return fs.existsSync(this.path);
    }
}

export type ProjectReference = {
    project: ProjectContext;
    scope?: ProjectScope;
    folders?: ProjectFolder[];
    module?: ProjectModule;
    file?: ProjectFile;
}

//

export class ProjectObject {
    public constructor(
        public readonly project: ProjectContext,
        public readonly name: string
    ) {}
}

export abstract class ProjectEntry extends ProjectObject {
    #path: string | undefined;

    public constructor(project: ProjectContext, name: string
    ) {
        super(project, name);

    }

    public get path() : string {
        if(!this.#path) {
            this.#path = this.getPath();
        }

        return this.#path;
    }

    protected abstract getPath(): string;
}

//

export class ProjectConfig extends ProjectEntry {
    #data: any | undefined;

    public constructor(
        public readonly project: ProjectContext
    ) {
        super(project, "zuord.json");
    }

    //

    public get data() : any | undefined {
        if(this.#data === null) {
            return undefined;
        }

        if(this.#data === undefined) {
            return this.loadData();
        }

        return this.#data;
    }

    public loadData() : any | undefined {
        if(!fs.existsSync(this.path)) {
            this.#data = undefined;
            return undefined;
        }

        try {
            const content = fs.readFileSync(this.path, "utf-8");
            return this.#data = JSON.parse(content);
        } catch (error) {
            return this.#data = null;
        }
    }

    //

    protected getPath(): string {
        return PATH.join(this.project.path, this.name);
    }
}

//

export class ProjectFile extends ProjectEntry {
    public constructor(
        public readonly module: ProjectModule,
        public readonly extension: FileExtension
    ) {
        super(module.project, `${module.name}.${extension}`);
    }

    protected getPath(): string {
        return `${this.module.parent.path}/${this.name}`;
    }
}

export type ProjectFileRecord = Partial<Record<FileName, ProjectFile>>;

//

export class ProjectModule extends ProjectObject {
    #file: ProjectFileRecord = {};

    public constructor(
        public readonly parent: ProjectDirectory, name: string) {
        super(parent.project, name);
    }

    //

    public get file(): ProjectFileRecord {
        return this.#file;
    }

    //

    public getFile(extension: FileExtension, shouldExists: boolean = false): ProjectFile | undefined {
        const name = getName(extension);
        const file = this.#file[name];

        if(file) return file;

        if(shouldExists) {
            const path = PATH.join(this.parent.path, `${this.name}.${extension}`);
            if(!fs.existsSync(path)) return undefined;
            if(!fs.statSync(path).isFile()) return undefined;
        }

        return this.#file[name] = new ProjectFile(this, extension);
    }
}

//

export abstract class ProjectDirectory extends ProjectEntry {   
    #files: ProjectFile[];
    #folders: ProjectFolder[]; 
    #modules: ProjectModule[];

    protected constructor(project: ProjectContext, name: string) {
        super(project, name);

        this.#files = [];
        this.#folders = [];
        this.#modules = [];
    }

    //

    public getObject(name: string, shouldExists: boolean = true) : ProjectObject | undefined {
        const entry = this.getEntry(name, shouldExists);
        if(entry) return entry;

        let [, moduleName] = regex.fileName.exec(name) || [];

        if(!moduleName) moduleName = name;

        const module = this.getModule(moduleName);
        return module;
    }

    public getEntry(name: string, shouldExists: boolean = true) : ProjectEntry | undefined {
        const file = this.getFile(name, shouldExists);
        if(file) return file;

        const folder = this.getFolder(name, shouldExists);
        if(folder) return folder;

        return undefined;
    }

    public getFile(name: string, shouldExists: boolean = true) : ProjectFile | undefined {
        let file = this.#files.find(f => f.name === name);
        if(file) return file;

        const [, moduleName, fileExtension] = regex.fileName.exec(name) || [];
        if(!moduleName) return undefined;

        const module = this.getModule(moduleName, shouldExists);
        if(!module) return undefined;

        file = module.getFile(fileExtension as FileExtension, shouldExists);
        if(!file) return undefined;

        this.#files.push(file);
        return file;
    }

    public getFolder(name: string, shouldExists: boolean = true) : ProjectFolder | undefined {
        let folder = this.#folders.find(f => f.name === name);
        if(folder) return folder;

        const path = PATH.join(this.path, name);

        if(shouldExists) {
            if(!fs.existsSync(path)) return undefined;
            if(!fs.statSync(path).isDirectory()) return undefined;
        }

        folder = new ProjectFolder(this, name);
        this.#folders.push(folder);
        return folder;
    }

    public getModule(name: string, _shouldExists: boolean = true) : ProjectModule | undefined {
        let module = this.#modules.find(m => m.name === name);
        if(module) return module;

        module = new ProjectModule(this, name);
        this.#modules.push(module);

        return module;
    }

    public getLastObject(path: string) : ProjectObject | undefined {
        return this.getLastObjectBySlugs(path.split("/").filter(Boolean));
    }

    public getLastFolder(path: string) : ProjectFolder | undefined {
        return this.getLastFolderBySlugs(path.split("/").filter(Boolean));
    }

    public getLastModule(path: string) : ProjectModule | undefined {
        return this.getLastModuleBySlugs(path.split("/").filter(Boolean));
    }

    public getLastObjectBySlugs(slugs: string[]) : ProjectObject | undefined {
        return this.getObjectChainBySlugs(slugs)?.pop();
    }

    public getLastFolderBySlugs(slugs: string[]) : ProjectFolder | undefined {
        const chain = this.getObjectChainBySlugs(slugs);
        const first = chain.pop();

        if(!first) return undefined;

        if(first instanceof ProjectFolder) {
            return first;
        }

        const second = chain.pop();

        if(!(second instanceof ProjectFolder)) {
            throw new Error("Inconsistent state: second entry is not a folder");
        }

        return second;
    }

    public getLastModuleBySlugs(slugs: string[]) : ProjectModule | undefined {
        const chain = this.getObjectChainBySlugs(slugs);
        const last = chain.pop();

        if(!last) return undefined;

        if(last instanceof ProjectModule) {
            return last;
        }
        
        return undefined;
    }

    public getObjectChain(path: string) : ProjectObject[] {
        return this.getObjectChainBySlugs(path.split("/").filter(Boolean));
    }

    public getObjectChainBySlugs(slugs: string[]) : ProjectObject[] {
        if (slugs.length === 0) return [];

        const [head, ...tail] = slugs;
        const entry = this.getObject(head, true);

        if (!entry) return [];

        if(entry instanceof ProjectDirectory) {
            return [entry, ...entry.getObjectChainBySlugs(tail)];
        }

        return [entry];
    }

    public getAllEntries() : ProjectEntry[] {
        const entries = fs.readdirSync(this.path, { withFileTypes: true });
        return entries.map(entry => this.getEntry(entry.name, true)).filter((e): e is ProjectEntry => Boolean(e));
    }

    public getAllFiles() : ProjectFile[] {
        const files = fs.readdirSync(this.path, { withFileTypes: true }).filter(entry => entry.isFile());
        return files.map(file => this.getFile(file.name, true)).filter((f): f is ProjectFile => Boolean(f));
    }

    public getAllFolders() : ProjectFolder[] {
        const folders = fs.readdirSync(this.path, { withFileTypes: true }).filter(entry => entry.isDirectory());
        return folders.map(folder => this.getFolder(folder.name, true)).filter((f): f is ProjectFolder => Boolean(f));
    }

    public getAllModules() : ProjectModule[] {
        const entries = fs.readdirSync(this.path, { withFileTypes: true }).filter(entry => entry.isFile());
        const moduleNames = new Set<string>();

        for (const entry of entries) {
            if (entry.isFile()) {
                const [, moduleName] = regex.fileName.exec(entry.name) || [];
                if (moduleName) {
                    moduleNames.add(moduleName);
                }
            }
        }

        const modules: ProjectModule[] = [];
        for (const moduleName of moduleNames) {
            const module = this.getModule(moduleName, true);
            if (module) {
                modules.push(module);
            }
        }

        return modules;
    }
}

//

export class ProjectScope extends ProjectDirectory {
    public constructor(project: ProjectContext, name: string, 
        public readonly type: ProjectScopeType
    ) {
        super(project, name);
    }

    public getPath(): string {
        return PATH.join(this.project.path, this.name);
    }

    //

    public static createFrom(context: ProjectContext, type : ProjectScopeType) : ProjectScope | undefined {
        const data = context.config.data;
        if(!data) return undefined;

        const name = type === ProjectScopeType.Source ? data.source : data.dist;
        if(!name || typeof name !== "string") return undefined;

        return new ProjectScope(context, name, type);
    }
}

export enum ProjectScopeType {
    Source = "source",
    Dist = "dist"
}

export type ProjectScopeRecord = {
    source: ProjectScope | undefined;
    dist: ProjectScope | undefined;
}

//

export class ProjectFolder extends ProjectDirectory {
    public constructor(
        public readonly parent: ProjectDirectory, name: string) {
        super(parent.project, name);
    }

    protected getPath(): string {
        return PATH.join(this.parent.path, this.name);
    }

    //

    public getParentSlugs(): string[] {
        return this.getParentChain().map(folder => folder.name);
    }

    public getParentChain(): ProjectDirectory[] {
        let current: ProjectDirectory | undefined = this.parent;

        const chain: ProjectDirectory[] = [];

        while (current) {
            chain.unshift(current);

            if (current instanceof ProjectFolder) {
                current = current.parent;
            }
            else {
                current = undefined;
            }
        }

        return chain;
    }
}