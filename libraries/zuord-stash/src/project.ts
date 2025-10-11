import * as regex from "./regex";
import fs from "fs";

export class Project {
    #config: any | undefined;
    #sourceScope : ProjectScope | undefined;
    #distScope : ProjectScope | undefined;

    public constructor(
        public readonly path: string,
    ) {
        if(!regex.path.test(path)) {
            throw new Error(`Invalid project path: ${path}`);
        }

        const json = this.loadConfig();

        if(!json) {
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
        }
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

    public loadConfig() : any | undefined {
        const jsonPath = this.getConfigPath();

        try {
            const content = fs.readFileSync(jsonPath, "utf-8");

            this.#config = JSON.parse(content);
            return this.#config;
        } catch (err) {
            console.error("Failed to read JSON:", err);

            this.#config = undefined;
            return undefined;
        }
    }

    public getConfigPath() : string {
        return `${this.path}/zuord.json`;
    }
}

//

export class ProjectConfig {
    public constructor(
        public readonly project: Project
    ) {}
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