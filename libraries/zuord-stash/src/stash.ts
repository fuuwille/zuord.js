import PATH from "path";
import FS from "fs";
import * as regex from "./regex";
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

    //

    public getProjectPath(path: string) : string | undefined {
        if(!regex.path.exec(path)) {
            return undefined;
        }

        const segments = [...path.split("/")];
        let lookingPath = segments[0];

        for(let i = 1; i < segments.length; i++) {
            lookingPath = PATH.join(lookingPath, segments[i]);

            if(FS.existsSync(PATH.join(lookingPath, "zuord.json"))) {
                return lookingPath;
            }
        }
    }
}