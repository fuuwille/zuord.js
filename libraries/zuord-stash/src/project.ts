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

        /*if(!json) {
            this.#sourceScope = undefined;
            this.#distScope = undefined;
        }
        else {
            if(json.source && typeof json.source === "string") {
                this.#sourceScope = new ProjectScope(json.source, ProjectScopeType.Source);
            }

            if(json.dist && typeof json.dist === "string") {
                this.#distScope = new ProjectScope(json.dist, ProjectScopeType.Dist);
            }
        }*/
    }

    //

    public get config() : any | undefined {
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
    #path: string;
    
    public constructor(
        public readonly project: Project
    ) {
        this.#path = `${this.project.path}/zuord.json`;
    }
}

//

export abstract class ProjectDirectory {
    #folders: ProjectFolder[];

    protected constructor(
        public readonly name: string
    ) {
        this.#folders = [];
    }
}

//

export class ProjectScope extends ProjectDirectory {
    public constructor(name: string, 
        public readonly type: ProjectScopeType
    ) {
        super(name);
    }
}

export enum ProjectScopeType {
    Source,
    Dist
}

//

export class ProjectFolder extends ProjectDirectory {
    public constructor(name: string) {
        super(name);
    }
}