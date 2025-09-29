import fs from "fs";
import path from "path";
import { Project, SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleFile, ModuleSchemaFile, ModuleVariantsFile } from "./moduleFile.tschema";
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
        case ModuleMode.Schema:
            return extractModuleSchemaFile(sourceFile);
        case ModuleMode.Variants:
            return extractModuleVariantsFile(sourceFile);
        default:
            throw new Error(`Unknown module file kind: ${mode}`);
    }
};

export const extractModuleFileAtPath = <TFile extends ModuleFile>(dir: string, name: string, mode: ModuleMode) : TFile | undefined => {
    const fileName = `${name}.${mode.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    const sourceFile = new Project().addSourceFileAtPath(filePath);

    if(fs.existsSync(filePath)) {
        return extractModuleFile(sourceFile, mode) as TFile;
    }

    return undefined;
};

export const extractModuleSchemaFile = (sourceFile: SourceFile) : ModuleSchemaFile => {
    return initializeModuleFile(sourceFile, ModuleMode.Schema) as ModuleSchemaFile;
};

export const extractModuleVariantsFile = (sourceFile: SourceFile) : ModuleVariantsFile => {
    return initializeModuleFile(sourceFile, ModuleMode.Variants) as ModuleVariantsFile;
};