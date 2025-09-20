import path from "path";
import { Project } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind, ModuleVariantsFile } from "./moduleFile.model";
import { isModuleMemberModelNode, isModuleMemberNode, isModuleMemberVariableNode } from "./moduleMemberNode.variants";
import { ModuleMemberNode } from "./moduleMemberNode.model";
import { extractModuleMember } from "./moduleMember.variants";

export const initializeModuleFile = (
    dir: string, name: string, kind: ModuleFileKind,         
    discard: (node: ModuleMemberNode) => boolean 
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
            const moduleMember = extractModuleMember(node);

            const collection = discard(node)
                ? moduleFile.discarded
                : moduleFile.members;

            collection.push(moduleMember);
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