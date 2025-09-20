import path from "path";
import { Project } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind, ModuleVariantsFile } from "./moduleFile.model";
import { isModuleMemberModelNode, isModuleMemberNode, isModuleMemberVariableNode } from "./moduleMemberNode.variants";
import { ModuleMemberNode } from "./moduleMemberNode.model";

export const initializeModuleFile = (
    dir: string, name: string, kind: ModuleFileKind,         
    _discard: (node: ModuleMemberNode) => boolean 
) : ModuleFile => {

    const fileName = `${name}.${kind.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    const sourceFile = new Project().addSourceFileAtPath(filePath);

    const moduleFile : ModuleFile = {
        kind,
        members: [],
        discarded: []
    };

    sourceFile.forEachChild((node) => {
        if(isModuleMemberNode(node)) {

        }
    });

    return moduleFile;
};

export const extractModuleModelFile = ($dir: string, $name: string) : ModuleModelFile => {
    return initializeModuleFile($dir, $name, ModuleFileKind.Model, isModuleMemberVariableNode) as ModuleModelFile;
};

export const extractModuleVariantsFile = (dir: string, name: string) : ModuleVariantsFile => {
    return initializeModuleFile(dir, name, ModuleFileKind.Variants, isModuleMemberModelNode) as ModuleVariantsFile;
};