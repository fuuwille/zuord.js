import PATH from "path";
import FS from "fs";
import * as regex from "./regex";
import { Project, ProjectReference } from "./project";

export class Stash {
    private static projects: Map<string, Project > = new Map();

    //

    public static getProject(path: string) : Project | undefined {
        const projectPath = Stash.getProjectReference(path);
        if (!projectPath) return undefined;

        /*const existing = Stash.projects.get(projectPath);
        if (existing) return existing;

        const project = new Project(projectPath);
        Stash.projects.set(projectPath, project);

        return project;*/
    }

    public static getProjectReference(path: string): ProjectReference | undefined {
        if (!regex.path.exec(path)) return undefined;

        const segments = path.split("/").filter(Boolean);

        let lookingPath = "";
        let lastFoundPath: string | undefined = undefined;

        let slugs: string[] = [];

        for (const segment of segments) {
            lookingPath = PATH.join(lookingPath, segment);

            if(lastFoundPath) {
                slugs.push(segment);
            }

            if (FS.existsSync(PATH.join(lookingPath, "zuord.json"))) {
                lastFoundPath = lookingPath;
                slugs = [];
            }
        }
    }
}