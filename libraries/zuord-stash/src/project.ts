import { pathRegex } from "./utility";

export class Project {
    #sourceScope : ProjectScope | undefined;
    #distScope : ProjectScope | undefined;

    private constructor(
        public readonly path: string,
    ) {
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

    public static create(path: string) : Project {
        return new Project(path);
    }

    public static isPathValid(path: string) : boolean {
        return pathRegex.test(path);
    }
}

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