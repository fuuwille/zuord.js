import PATH from "path";
import FS from "fs";
import * as regex from "./regex";
import { Project } from "./project";

export class Stash {
    private static projects: Map<string, Project > = new Map();

    //

    private static createProject(path: string) : Project {
        const project = new Project(path);
        Stash.projects.set(path, project);

        return project;
    }

    //

    public static getProject(path: string) : Project | undefined {
        const projectPath = Stash.getProjectPath(path);
        if (!projectPath) return undefined;

        const existing = Stash.projects.get(projectPath);
        if (existing) return existing;

        return Stash.createProject(projectPath);
    }

    public static getProjectPath(path: string): string | undefined {
        if (!regex.path.exec(path)) return undefined;

        const segments = path.split("/").filter(Boolean);

        let lookingPath = PATH.isAbsolute(path) ? PATH.sep : "";
        let lastFoundPath: string | undefined = undefined;

        for (const segment of segments) {
            lookingPath = PATH.join(lookingPath, segment);

            if (FS.existsSync(PATH.join(lookingPath, "zuord.json"))) {
                lastFoundPath = lookingPath;
            }
        }

        return lastFoundPath;
    }
}