import * as regex from "./regex";
import fs from "fs";

export class Project {
    #sourceScope : ProjectScope | undefined;
    #distScope : ProjectScope | undefined;

    public constructor(
        public readonly path: string,
    ) {
        if(!regex.path.test(path)) {
            throw new Error(`Invalid project path: ${path}`);
        }

        this.#sourceScope = undefined;
        this.#distScope = undefined;
    }

    //

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

    public getJSON() : any | undefined {
        const jsonPath = this.getJSONPath();

        try {
            const content = fs.readFileSync(jsonPath, "utf-8");
            const json = JSON.parse(content);

            return json;
        } catch (err) {
            console.error("Failed to read JSON:", err);
            return undefined;
        }
    }

    public getJSONPath() : string {
        return `${this.path}/zuord.json`;
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
    private constructor(name: string, 
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
    private constructor(name: string) {
        super(name);
    }
}