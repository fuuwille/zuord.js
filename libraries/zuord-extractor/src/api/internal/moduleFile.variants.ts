import path from "path";
import { Project } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind } from "./moduleFile.model";

export const initializeModuleFile = ($dir: string, $name: string, $kind: ModuleFileKind) : ModuleFile => {
    const kind = $kind;
    const fileName = `${$name}.${$kind.toLowerCase()}.ts`;
    const filePath = path.join($dir, fileName);

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(filePath);

    return {
        kind,
        members: []
    };
};

export const extractModuleModelFile = ($dir: string, $name: string) : ModuleModelFile => {
    return initializeModuleFile($dir, $name, ModuleFileKind.Model) as ModuleModelFile;
};