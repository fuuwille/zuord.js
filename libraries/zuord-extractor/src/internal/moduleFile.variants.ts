import fs from "fs";
import path from "path";
import { Project, SourceFile, ts } from "ts-morph";
import { ModuleMode } from "./module.type";
import { ModuleFile, ModuleTypeFile, ModuleVariantsFile } from "./moduleFile.type";
import { isModuleDiscardedNode, isModuleKnownNode } from "./moduleNode.variants";
import { extractModuleMember } from "./moduleMember.variants";

export const initializeModuleFile = (
    sourceFile: SourceFile, mode: ModuleMode
) : ModuleFile => {

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

export const extractModuleFile = (sourceFile: SourceFile, mode: ModuleMode) : ModuleFile => {
    switch(mode) {
        case ModuleMode.Type:
            return extractModuleTypeFile(sourceFile);
        case ModuleMode.Variants:
            return extractModuleVariantsFile(sourceFile);
        default:
            throw new Error(`Unknown module file kind: ${mode}`);
    }
};

export const extractModuleFileIfExists = (dir: string, name: string, mode: ModuleMode) : ModuleFile | undefined => {
    const fileName = `${name}.${mode.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    const sourceFile = new Project().addSourceFileAtPath(filePath);

    if(fs.existsSync(filePath)) {
        return extractModuleFile(sourceFile, mode);
    }

    return undefined;
};

export const extractModuleTypeFile = (sourceFile: SourceFile) : ModuleTypeFile => {
    return initializeModuleFile(sourceFile, ModuleMode.Type) as ModuleTypeFile;
};

export const extractModuleVariantsFile = (sourceFile: SourceFile) : ModuleVariantsFile => {
    return initializeModuleFile(sourceFile, ModuleMode.Variants) as ModuleVariantsFile;
};