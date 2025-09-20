import path from "path";
import { Project, SourceFile } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind } from "./moduleFile.model";
import { ModuleModelMember } from "./moduleMember.model";
import { extractModuleModelMember } from "./moduleMember.variants";

export const initializeModuleFile = ($dir: string, $name: string, $kind: ModuleFileKind, $solve: (source: SourceFile, data: ModuleFile) => void) : ModuleFile => {
    const kind = $kind;
    const fileName = `${$name}.${$kind.toLowerCase()}.ts`;
    const filePath = path.join($dir, fileName);

    const moduleFile : ModuleFile = {
        kind,
        members: []
    };

    const sourceFile = new Project().createSourceFile(filePath);

    $solve(sourceFile, moduleFile);
    return moduleFile;
};

export const extractModuleModelFile = ($dir: string, $name: string) : ModuleModelFile => {
    return initializeModuleFile($dir, $name, ModuleFileKind.Model, (file, data) => {
        file.forEachChild((node) => {
            const moduleNode = extractModuleModelMember(node);

            if (moduleNode) {
                data.members.push(moduleNode);
            }
        });
    }) as ModuleModelFile;
};