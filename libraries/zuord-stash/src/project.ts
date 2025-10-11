export type Project = {
    path: string;
}

export abstract class ProjectDirectory {
    protected constructor(
        public readonly name: string
    ) {

    }
}

export class ProjectScope extends ProjectDirectory {
    protected constructor(name: string, 
        public readonly type: ProjectScopeType
    ) {
        super(name);
    }
}

export enum ProjectScopeType {
    Source,
    Dist
}

export class ProjectFolder extends ProjectDirectory {
    protected constructor(name: string) {
        super(name);
    }
}