import PATH from "path";
import FS from "fs";
import * as regex from "../../zuord-stash/src/regex";
import { Project, ProjectFile, ProjectFolder, ProjectModule, ProjectScope } from "./project";

export class Stash {
    private static projects: Map<string, Project > = new Map();

    //

    public static reference(path: string): StashReference | undefined {
        if (!regex.path.exec(path)) return undefined;

        const segments = path.split("/").filter(Boolean);

        let lookingPath = "/";
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

            if (index > 0) {
                scopeRef = scope;
                slugs = slugs.slice(index);
                break;
            }
        }

        function scopeIndex(scope: ProjectScope) {
            const scopeSlugs = scope.name.split("/").filter(Boolean);

            for (let i = 0; i < scopeSlugs.length; i++) {
                if (slugs[i] !== scopeSlugs[i]) return 0;
            }

            return scopeSlugs.length;
        }

        if (!scopeRef) return {
            project: projectRef
        };

        const objects = scopeRef.getObjectChainBySlugs(slugs);
        const lastObject = objects.pop();

        if(!lastObject) return {
            project: projectRef,
            scope: scopeRef
        };

        if(lastObject instanceof ProjectFolder) {
            return {
                project: projectRef,
                scope: scopeRef,
                folders: [...(objects as ProjectFolder[]), lastObject],
            }
        }

        if(lastObject instanceof ProjectModule) {
            return {
                project: projectRef,
                scope: scopeRef,
                folders: [...(objects as ProjectFolder[])],
                module: lastObject
            }
        }
        
        if(lastObject instanceof ProjectFile) {
            return {
                project: projectRef,
                scope: scopeRef,
                folders: objects as ProjectFolder[],
                module: lastObject.module,
                file: lastObject
            }
        }
    }
}

export type StashReference = {
    project: Project;
    scope?: ProjectScope;
    folders?: ProjectFolder[];
    module?: ProjectModule;
    file?: ProjectFile;
}