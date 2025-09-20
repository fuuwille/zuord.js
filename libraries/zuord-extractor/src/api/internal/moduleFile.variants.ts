import path from "path";
import { Project, SourceFile } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind } from "./moduleFile.model";
import { ModuleMember, ModuleModelMember } from "./moduleMember.model";
import { extractModuleModelMember } from "./moduleMember.variants";

export const initializeModuleFile = ($dir: string, $name: string, $kind: ModuleFileKind, $solve: (file: SourceFile) => ModuleMember[]) : ModuleFile => {
    const kind = $kind;
    const fileName = `${$name}.${$kind.toLowerCase()}.ts`;
    const filePath = path.join($dir, fileName);

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(filePath);
    const members = $solve(sourceFile);

    return {
        kind,
        members
    };
};

export const extractModuleModelFile = ($dir: string, $name: string) : ModuleModelFile => {
    return initializeModuleFile($dir, $name, ModuleFileKind.Model, (file) => {
        const members : ModuleModelMember[] = [];

        file.forEachChild((node) => {
            const moduleNode = extractModuleModelMember(node);

            if (moduleNode) {
                members.push(moduleNode);
            }
        });

        return members;
    }) as ModuleModelFile;
};