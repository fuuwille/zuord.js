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

export abstract class ProjectEntry {
    public constructor(
        public readonly project: Project,
        public readonly name: string
    ) {}

    abstract getPath(): string;
}

export type ProjectReference = {
    project: Project;
    scope?: ProjectScope;
    folders?: ProjectFolder[];
    file?: ProjectFile;
}

//

export class ProjectFile extends ProjectEntry {
    public constructor(parent: ProjectDirectory, name: string) {
        super(parent.project, name);
    }

    public getPath(): string {
        throw new Error("Method not implemented.");
    }
}

//

export abstract class ProjectDirectory extends ProjectEntry {
    #folders: ProjectFolder[];

    protected constructor(project: Project, name: string) {
        super(project, name);
        this.#folders = [];
    }

    //

    public getFolder(name: string) : ProjectFolder | undefined {
        const existing = this.#folders.find(folder => folder.name === name);
        if (existing) return existing;

        const path = PATH.join(this.getPath(), name);

        if(fs.existsSync(path)) {
            const folder = new ProjectFolder(this.project, name);
            this.#folders.push(folder);
            return folder;
        }

        return undefined;
    }

    public resolveFolder(path: string) : ProjectFolder | undefined {
        return this.resolveFolderBySlug(path.split("/").filter(Boolean));
    }

    public resolveFolderBySlug(slugs: string[]) : ProjectFolder | undefined {
        if (slugs.length === 0) return undefined;

        const [head, ...tail] = slugs;
        const folder = this.getFolder(head);
        if (!folder) return undefined;

        if (tail.length === 0) {
            return folder;
        }

        return folder.resolveFolderBySlug(tail);
    }

    public resolveFolders(path: string) : ProjectFolder[] {
        return this.resolveFoldersBySlug(path.split("/").filter(Boolean));
    }

    public resolveFoldersBySlug(slugs: string[]) : ProjectFolder[] {
        if (slugs.length === 0) return [];

        const [head, ...tail] = slugs;
        const folder = this.getFolder(head);
        if (!folder) return [];

        if (tail.length === 0) {
            return [folder];
        }

        return [folder, ...folder.resolveFoldersBySlug(tail)];
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
    Source,
    Dist
}

//

export class ProjectFolder extends ProjectDirectory {
    public constructor(project: Project, name: string) {
        super(project, name);
    }

    public getPath(): string {
        throw new Error("Method not implemented.");
    }
}