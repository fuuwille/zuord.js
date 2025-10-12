import * as regex from "./regex";
import PATH from "path";
import fs from "fs";

export class Project {
    #config: ProjectConfig;
    #sourceScope : ProjectScope | undefined;
    #distScope : ProjectScope | undefined;

    public constructor(
        public readonly path: string,
    ) {
        if(!regex.path.test(path)) {
            throw new Error(`Invalid project path: ${path}`);
        }

        this.#config = new ProjectConfig(this);
        this.#sourceScope = ProjectScope.createFrom(this, ProjectScopeType.Source);
        this.#distScope = ProjectScope.createFrom(this, ProjectScopeType.Dist);
    }

    //

    public get config() : ProjectConfig {
        return this.#config;
    }

    public get sourceScope() : ProjectScope | undefined {
        return this.#sourceScope;
    }

    public get distScope() : ProjectScope | undefined {
        return this.#distScope;
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
        public readonly type: ProjectFileExtension
    ) {
        super(module.project, `${module.name}.${type}`);
    }

    protected getPath(): string {
        return `${this.module.parent.path}/${this.name}`;
    }
}

export enum ProjectFileExtension {
    TS = "ts",
    TZS = "tzs",
    TZV = "tzv",
    ZSchema = "zschema.ts",
    ZVariants = "zvariants.ts"
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

    public getFile(extension: ProjectFileExtension): ProjectFile | undefined {
        switch (extension) {
            case ProjectFileExtension.TS:
                return this.#tsFile;
            case ProjectFileExtension.TZS:
                return this.#tzsFile;
            case ProjectFileExtension.TZV:
                return this.#tzvFile;
            case ProjectFileExtension.ZSchema:
                return this.#zSchemaFile;
            case ProjectFileExtension.ZVariants:
                return this.#zVariantsFile;
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

    public getEntry(name: string) : ProjectEntry | undefined {
        const folder = this.getFolder(name);
        if(folder) return folder;

        const file = this.getFile(name);
        if(file) return file;

        return undefined;
    }

    public getFolder(name: string) : ProjectFolder | undefined {
        const folder = this.#folders.find(f => f.name === name);

        if(folder) {
            return folder;
        }

        const path = PATH.join(this.path, name);

        const stat = fs.statSync(path);

        if(stat.isDirectory()) {
            const folder = new ProjectFolder(this, name);
            this.#folders.push(folder);
            return folder;
        }

        return undefined;
    }

    public getFile(name: string) : ProjectFile | undefined {
        const [, moduleName, fileExtension] = regex.fileName.exec(name) || [];
        if(!moduleName) return undefined;

        const module = this.#modules.find(f => f.name === moduleName);

        if(module) {
            return module.getFile(fileExtension as ProjectFileExtension);
        }

        const path = PATH.join(this.path, name);
        const stat = fs.statSync(path);

        if(moduleName && stat.isFile()) {
            const module = new ProjectModule(this, moduleName);
            this.#modules.push(module);

            return new ProjectFile(module, fileExtension as ProjectFileExtension);
        }

        return undefined;
    }

    public getLastEntry(path: string) : ProjectEntry | undefined {
        return this.getLastEntryBySlugs(path.split("/").filter(Boolean));
    }

    public getLastFolder(path: string) : ProjectFolder | undefined {
        return this.getLastFolderBySlugs(path.split("/").filter(Boolean));
    }

    public getLastModule(path: string) : ProjectModule | undefined {
        return this.getLastModuleBySlugs(path.split("/").filter(Boolean));
    }

    public getLastEntryBySlugs(slugs: string[]) : ProjectEntry | undefined {
        return this.getEntryChainBySlugs(slugs)?.pop();
    }

    public getLastFolderBySlugs(slugs: string[]) : ProjectFolder | undefined {
        const chain = this.getEntryChainBySlugs(slugs);
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
        const chain = this.getEntryChainBySlugs(slugs);
        const last = chain.pop();

        if(!last) return undefined;

        if(last instanceof ProjectModule) {
            return last;
        }
        
        return undefined;
    }

    public getEntryChain(path: string) : ProjectEntry[] {
        return this.getEntryChainBySlugs(path.split("/").filter(Boolean));
    }

    public getEntryChainBySlugs(slugs: string[]) : ProjectEntry[] {
        if (slugs.length === 0) return [];

        const [head, ...tail] = slugs;
        const entry = this.getEntry(head);

        if (!entry) return [];

        if(entry instanceof ProjectDirectory) {
            return [entry, ...entry.getEntryChainBySlugs(tail)];
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