import * as regex from "./~regex";
import PATH from "path";
import fs from "fs";
import { FileExtension } from "./file";

export class Project {
    #config: ProjectConfig;
    #scope: ProjectScopeRecord;

    public constructor(
        public readonly path: string,
    ) {
        if(!regex.path.test(path)) {
            throw new Error(`Invalid project path: ${path}`);
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

//

export class ProjectConfig {
    #data: any | undefined;

    public readonly path: string;

    public constructor(
        public readonly project: Project
    ) {
        this.path = `${this.project.path}/zuord.json`;
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
}

//


export class ProjectObject {
    public constructor(
        public readonly project: Project,
        public readonly name: string
    ) {}
}

export abstract class ProjectEntry extends ProjectObject {
    #path: string | undefined;

    public constructor(project: Project, name: string
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

//

export class ProjectModule extends ProjectObject {
    #tsFile: ProjectFile | undefined;
    #tzsFile: ProjectFile | undefined;
    #tzvFile: ProjectFile | undefined;
    #zSchemaFile: ProjectFile | undefined;
    #zVariantsFile: ProjectFile | undefined;

    public constructor(
        public readonly parent: ProjectDirectory, name: string) {
        super(parent.project, name);
    }

    //

    public get tsFile(): ProjectFile | undefined {
        return this.#tsFile;
    }

    public get tzsFile(): ProjectFile | undefined {
        return this.#tzsFile;
    }

    public get tzvFile(): ProjectFile | undefined {
        return this.#tzvFile;
    }

    public get zSchemaFile(): ProjectFile | undefined {
        return this.#zSchemaFile;
    }

    public get zVariantsFile(): ProjectFile | undefined {
        return this.#zVariantsFile;
    }

    //

    public getFile(extension: FileExtension, shouldExists: boolean = false): ProjectFile | undefined {
        let file;
        switch (extension) {
            case FileExtension.TS:
                file = this.#tsFile;
                break;
            case FileExtension.TZS:
                file = this.#tzsFile;
                break;
            case FileExtension.TZV:
                file = this.#tzvFile;
                break;
            case FileExtension.ZSchema:
                file = this.#zSchemaFile;
                break;
            case FileExtension.ZVariant:
                file = this.#zVariantsFile;
                break;
            default:
                return undefined;
        }

        if(file) return file;

        if(shouldExists) {
            const path = PATH.join(this.parent.path, `${this.name}.${extension}`);
            if(!fs.existsSync(path)) return undefined;
            if(!fs.statSync(path).isFile()) return undefined;
        }

        switch (extension) {
            case FileExtension.TS:
                return this.#tsFile = new ProjectFile(this, FileExtension.TS);
            case FileExtension.TZS:
                return this.#tzsFile = new ProjectFile(this, FileExtension.TZS);
            case FileExtension.TZV:
                return this.#tzvFile = new ProjectFile(this, FileExtension.TZV);
            case FileExtension.ZSchema:
                return this.#zSchemaFile = new ProjectFile(this, FileExtension.ZSchema);
            case FileExtension.ZVariant:
                return this.#zVariantsFile = new ProjectFile(this, FileExtension.ZVariant);
            default:
                return undefined;
        }
    }
}

//

export abstract class ProjectDirectory extends ProjectEntry {
    #folders: ProjectFolder[];
    #modules: ProjectModule[];

    protected constructor(project: Project, name: string) {
        super(project, name);

        this.#folders = [];
        this.#modules = [];
    }

    //

    public getObject(name: string, shouldExists: boolean = false) : ProjectObject {
        const entry = this.getEntry(name, shouldExists);
        if(entry) return entry;

        let [, moduleName] = regex.fileName.exec(name) || [];

        if(!moduleName) moduleName = name;

        const module = this.getModule(moduleName);
        return module;
    }

    public getEntry(name: string, shouldExists: boolean = false) : ProjectEntry | undefined {
        const folder = this.getFolder(name, shouldExists);
        if(folder) return folder;

        const file = this.getFile(name, shouldExists);
        if(file) return file;

        return undefined;
    }

    public getFolder(name: string, shouldExists: boolean = false) : ProjectFolder | undefined {
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

    public getModule(name: string) {
        let module = this.#modules.find(m => m.name === name);
        if(module) return module;

        module = new ProjectModule(this, name);
        this.#modules.push(module);

        return module;
    }

    public getFile(name: string, shouldExists: boolean = false) : ProjectFile | undefined {
        const [, moduleName, fileExtension] = regex.fileName.exec(name) || [];
        if(!moduleName) return undefined;

        const module = this.getModule(moduleName);
        return module.getFile(fileExtension as FileExtension, shouldExists);
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
}

//

export class ProjectScope extends ProjectDirectory {
    public constructor(project: Project, name: string, 
        public readonly type: ProjectScopeType
    ) {
        super(project, name);
    }

    public getPath(): string {
        return PATH.join(this.project.path, this.name);
    }

    //

    public static createFrom(project: Project, type : ProjectScopeType) : ProjectScope | undefined {
        const data = project.config.data;
        if(!data) return undefined;

        const name = type === ProjectScopeType.Source ? data.source : data.dist;
        if(!name || typeof name !== "string") return undefined;

        return new ProjectScope(project, name, type);
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