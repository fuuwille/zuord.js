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

        let project;

        project = Stash.projects.get(path);

        if (!project) {
            project = new Project(path);
            Stash.projects.set(path, project);
        }

        let scope: ProjectScope | undefined;
        const scopeList = [project.sourceScope, project.distScope].filter(Boolean) as ProjectScope[];

        for (const $scope of scopeList) {
            const index = scopeIndex($scope);

            if (index) {
                scope = $scope;
                slugs = slugs.slice(index - 1);
                break;
            }
        }

        function scopeIndex(scope: ProjectScope) {
            const scopeSlugs = scope.getPath().split("/").filter(Boolean);

            let i;
            for (i = 0; i < slugs.length; i++) {
                if (slugs[i] !== scopeSlugs[i]) {
                    return 0;
                }
            }

            return i + 1;
        }

        if (!scope) return undefined;
    }
}