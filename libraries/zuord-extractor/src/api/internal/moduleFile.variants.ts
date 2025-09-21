import fs from "fs";
import path from "path";
import { Project } from "ts-morph";
import { ModuleMode } from "./module.model";
import { ModuleFile, ModuleModelFile, ModuleVariantsFile } from "./moduleFile.model";
import { isModuleDiscardedNode, isModuleKnownNode } from "./moduleNode.variants";
import { extractModuleMember } from "./moduleMember.variants";

export const initializeModuleFile = (
    dir: string, name: string, mode: ModuleMode
) : ModuleFile => {

    const fileName = `${name}.${mode.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    const sourceFile = new Project().addSourceFileAtPath(filePath);

    const moduleFile : ModuleFile = {
        source: sourceFile,
        mode: mode,
        members: [],
        discarded: [],
        others: []
    };

    sourceFile.forEachChild((node) => {
        const moduleMember = extractModuleMember(node);

        if(isModuleKnownNode(node)) {
            const collection = isModuleDiscardedNode(node, mode)
                ? moduleFile.discarded
                : moduleFile.members;

            collection.push(moduleMember);
        }
        else {
            moduleFile.others.push(moduleMember);
        }
    });

    return moduleFile;
};

export const extractModuleFile = (dir: string, name: string, mode: ModuleMode) : ModuleFile => {
    switch(mode) {
        case ModuleMode.Model:
            return extractModuleModelFile(dir, name);
        case ModuleMode.Variants:
            return extractModuleVariantsFile(dir, name);
        default:
            throw new Error(`Unknown module file kind: ${mode}`);
    }
};

export const extractModuleFileIfExists = (dir: string, name: string, mode: ModuleMode) : ModuleFile | undefined => {
    const fileName = `${name}.${mode.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    if(fs.existsSync(filePath)) {
        return extractModuleFile(dir, name, mode);
    }

    return undefined;
};

export const extractModuleModelFile = (dir: string, name: string) : ModuleModelFile => {
    return initializeModuleFile(dir, name, ModuleMode.Model) as ModuleModelFile;
};

export const extractModuleVariantsFile = (dir: string, name: string) : ModuleVariantsFile => {
    return initializeModuleFile(dir, name, ModuleMode.Variants) as ModuleVariantsFile;
};