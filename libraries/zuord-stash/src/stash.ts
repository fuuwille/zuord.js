import { Project } from "./project";

export class Stash {
    private static projects: Map<string, Project>;

    public constructor() {
        Stash.projects = new Map();
    }

    //

    public static createProject(path: string) : Project {
        const project = new Project(path);
        Stash.projects.set(path, project);

        return project;
    }
}