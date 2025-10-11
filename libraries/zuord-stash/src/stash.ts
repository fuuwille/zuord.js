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

    public static getProjectPath(path: string): string | undefined {
        if (!regex.path.exec(path)) return undefined;

        const segments = path.split("/").filter(Boolean);
        let lookingPath = PATH.isAbsolute(path) ? PATH.sep : "";

        for (const segment of segments) {
            lookingPath = PATH.join(lookingPath, segment);

            if (FS.existsSync(PATH.join(lookingPath, "zuord.json"))) {
                return lookingPath;
            }
        }

        return undefined;
    }
}