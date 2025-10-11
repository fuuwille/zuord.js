import PATH from "path";
import FS from "fs";
import * as regex from "./regex";
import { Project, ProjectReference, ProjectScope } from "./project";

export class Stash {
    private static projects: Map<string, Project > = new Map();

    //

    public static getProjectReference(path: string): ProjectReference | undefined {
        if (!regex.path.exec(path)) return undefined;

        const segments = path.split("/").filter(Boolean);

        let lookingPath = "";
        let projectPath: string | undefined = undefined;

        let slugs: string[] = [];

        for (const segment of segments) {
            lookingPath = PATH.join(lookingPath, segment);

            if(projectPath) {
                slugs.push(segment);
            }

            if (FS.existsSync(PATH.join(lookingPath, "zuord.json"))) {
                projectPath = lookingPath;
                slugs = [];
            }
        }

        if (!projectPath) return undefined;

        let projectRef;

        projectRef = Stash.projects.get(projectPath);

        if (!projectRef) {
            projectRef = new Project(projectPath);
            Stash.projects.set(projectPath, projectRef);
        }

        let scopeRef: ProjectScope | undefined;
        const scopeList = [projectRef.sourceScope, projectRef.distScope].filter(Boolean) as ProjectScope[];

        for (const scope of scopeList) {
            const index = scopeIndex(scope);

            if (index) {
                scopeRef = scope;
                slugs = slugs.slice(index);
                break;
            }
        }

        function scopeIndex(scope: ProjectScope) {
            const scopeSlugs = scope.getPath().split("/").filter(Boolean);

            for (let i = 0; i < scopeSlugs.length; i++) {
                if (slugs[i] !== scopeSlugs[i]) return 0;
            }

            return scopeSlugs.length;
        }

        if (!scopeRef) return undefined;
    }
}