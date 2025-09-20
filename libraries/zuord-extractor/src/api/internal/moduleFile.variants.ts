import path from "path";
import { Project } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind, ModuleVariantsFile } from "./moduleFile.model";
import { isModuleMemberDiscardedModelNode, isModuleMemberDiscardedVariantNode, isModuleMemberNode } from "./moduleMemberNode.variants";
import { ModuleMemberNode } from "./moduleMemberNode.model";
import { extractModuleMember } from "./moduleMember.variants";

export const initializeModuleFile = (
    dir: string, name: string, kind: ModuleFileKind,         
    isDiscardedNode: (node: ModuleMemberNode) => boolean 
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

            const collection = isDiscardedNode(node)
                ? moduleFile.discarded
                : moduleFile.members;

            collection.push(moduleMember);
        }
    });

    return moduleFile;
};

export const extractModuleModelFile = (dir: string, name: string) : ModuleModelFile => {
    return initializeModuleFile(dir, name, ModuleFileKind.Model, isModuleMemberDiscardedModelNode) as ModuleModelFile;
};

export const extractModuleVariantsFile = (dir: string, name: string) : ModuleVariantsFile => {
    return initializeModuleFile(dir, name, ModuleFileKind.Variants, isModuleMemberDiscardedVariantNode) as ModuleVariantsFile;
};