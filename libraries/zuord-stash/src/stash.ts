import PATH from "path";
import FS from "fs";
import * as regex from "./regex";
import { Project, ProjectReference } from "./project";

export class Stash {
    private static projects: Map<string, Project > = new Map();

    //

    private static fetchProject(path: string) : Project | undefined {
        const existing = Stash.projects.get(path);
        if (existing) return existing;

        const project = new Project(path);
        Stash.projects.set(path, project);

        return project;
    }

    //

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

        if (!lastFoundPath) return undefined;

        const project = Stash.fetchProject(lastFoundPath);
        if (!project) return undefined;

        const scopeSlugs : string[][] = [
            project.sourceScope?.getPath().split("/").filter(Boolean) || [],
            project.distScope?.getPath().split("/").filter(Boolean) || []
        ];
    }
}