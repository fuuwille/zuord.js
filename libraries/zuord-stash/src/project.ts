export type Project = {
    path: string;
}

export interface ProjectDirectory {
    name: string;
}

export interface ProjectScope extends ProjectDirectory {
    type: ProjectScopeType;
}

export enum ProjectScopeType {
    Source,
    Dist
}