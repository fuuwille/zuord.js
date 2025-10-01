import fs from "fs";
import path from "path";
import { Project, SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleFile } from "./moduleFile";
import { isModuleDiscardedNode, isModuleKnownNode } from "./moduleNode.variants";
import { createMember } from "./moduleMember.variants";

export const initialize = (
    sourceFile: SourceFile, mode: ModuleMode
) : ModuleFile.BaseFile => {

    const moduleFile : ModuleFile.BaseFile = {
        source: sourceFile,
        mode: mode,
        members: [],
        discarded: [],
        others: []
    };

    sourceFile.forEachChild((node) => {
        const moduleMember = createMember(node);

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

export const extract = (sourceFile: SourceFile, mode: ModuleMode) : ModuleFile.BaseFile => {
    switch(mode) {
        case ModuleMode.Schema:
            return extractSchema(sourceFile);
        case ModuleMode.Variants:
            return extractVariants(sourceFile);
        default:
            throw new Error(`Unknown module file kind: ${mode}`);
    }
};

export const extractAtPath = <TFile extends ModuleFile.BaseFile>(dir: string, name: string, mode: ModuleMode) : TFile | undefined => {
    const fileName = `${name}.${mode.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    const sourceFile = new Project().addSourceFileAtPath(filePath);

    if(fs.existsSync(filePath)) {
        return extract(sourceFile, mode) as TFile;
    }

    return undefined;
};

export const extractSchema = (sourceFile: SourceFile) : ModuleFile.SchemaFile => {
    return initialize(sourceFile, ModuleMode.Schema) as ModuleFile.SchemaFile;
};

export const extractVariants = (sourceFile: SourceFile) : ModuleFile.VariantsFile => {
    return initialize(sourceFile, ModuleMode.Variants) as ModuleFile.VariantsFile;
};