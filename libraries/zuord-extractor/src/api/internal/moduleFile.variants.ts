import path from "path";
import { Project } from "ts-morph";
import { ModuleModelFile, ModuleFileKind } from "./moduleFile.model";

export const extractModuleModelFile = ($dir: string, $name: string) : ModuleModelFile => {
    const fileName = `${$name}.model.ts`;
    const filePath = path.join($dir, fileName);

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(filePath);

    return {
        kind: ModuleFileKind.Model,
        members: []
    };
};