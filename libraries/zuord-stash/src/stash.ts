import { Project } from "./project";

export class Stash {
    private projects: Map<string, Project>;

    public constructor() {
        this.projects = new Map();
    }

    //

    private createProject(path: string) : Project {
        const project = new Project(path);
        this.projects.set(path, project);

        return project;
    }
}