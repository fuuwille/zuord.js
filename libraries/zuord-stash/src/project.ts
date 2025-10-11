import * as regex from "./regex";
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
}

export type ProjectReference = {
    project: Project | null;
    scope: ProjectScope | null;
    folders: ProjectFolder[];
    file: ProjectFile | null;
}

//

export class ProjectFile extends ProjectEntry {
    public constructor(parent: ProjectDirectory, name: string) {
        super(parent.project, name);
    }
}

//

export abstract class ProjectDirectory extends ProjectEntry {
    #folders: ProjectFolder[];

    protected constructor(project: Project, name: string) {
        super(project, name);
        this.#folders = [];
    }
}

//

export class ProjectScope extends ProjectDirectory {
    public constructor(project: Project, name: string, 
        public readonly type: ProjectScopeType
    ) {
        super(project, name);
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
}