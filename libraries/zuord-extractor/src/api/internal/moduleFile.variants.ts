import fs from "fs";
import path from "path";
import { Project } from "ts-morph";
import { ModuleFile, ModuleModelFile, ModuleFileKind, ModuleVariantsFile } from "./moduleFile.model";
import { isModuleDiscardedModelNode, isModuleDiscardedVariantNode, isModuleNode } from "./moduleNode.variants";
import { ModuleNode } from "./moduleNode.model";
import { extractModuleMember } from "./moduleMember.variants";

export const initializeModuleFile = (
    dir: string, name: string, kind: ModuleFileKind,         
    isDiscardedNode: (node: ModuleNode) => boolean 
) : ModuleFile => {

    const fileName = `${name}.${kind.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    const sourceFile = new Project().addSourceFileAtPath(filePath);

    const moduleFile : ModuleFile = {
        kind,
        members: [],
        discarded: [],
        others: []
    };

    sourceFile.forEachChild((node) => {
        if(isModuleNode(node)) {
            const moduleMember = extractModuleMember(node);

            const collection = isDiscardedNode(node)
                ? moduleFile.discarded
                : moduleFile.members;

            collection.push(moduleMember);
        }
        else {
            moduleFile.others.push(node);
        }
    });

    return moduleFile;
};

export const extractModuleFile = (dir: string, name: string, kind: ModuleFileKind) : ModuleFile => {
    switch(kind) {
        case ModuleFileKind.Model:
            return extractModuleModelFile(dir, name);
        case ModuleFileKind.Variants:
            return extractModuleVariantsFile(dir, name);
        default:
            throw new Error(`Unknown module file kind: ${kind}`);
    }
};

export const extractModuleFileIfExists = (dir: string, name: string, kind: ModuleFileKind) : ModuleFile | undefined => {
    const fileName = `${name}.${kind.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    if(fs.existsSync(filePath)) {
        return extractModuleFile(dir, name, kind);
    }

    return undefined;
};

export const extractModuleModelFile = (dir: string, name: string) : ModuleModelFile => {
    return initializeModuleFile(dir, name, ModuleFileKind.Model, isModuleDiscardedModelNode) as ModuleModelFile;
};

export const extractModuleVariantsFile = (dir: string, name: string) : ModuleVariantsFile => {
    return initializeModuleFile(dir, name, ModuleFileKind.Variants, isModuleDiscardedVariantNode) as ModuleVariantsFile;
};