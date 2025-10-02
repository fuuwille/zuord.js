import fs from "fs";
import path from "path";
import { Project, SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleFile } from "./moduleFile";
import { isDiscarded, isKnownLike } from "./moduleNode.tvariants";
import { create } from "./moduleMember.tvariants";

export const initializeFile = (
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
        const moduleMember = create(node);

        if(isKnownLike(node)) {
            const collection = isDiscarded(node, mode)
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

export const extractFile = (sourceFile: SourceFile, mode: ModuleMode) : ModuleFile.BaseFile => {
    switch(mode) {
        case ModuleMode.Schema:
            return extractSchemaFile(sourceFile);
        case ModuleMode.Variants:
            return extractVariantsFile(sourceFile);
        default:
            throw new Error(`Unknown module file kind: ${mode}`);
    }
};

export const extractFileAtPath = <TFile extends ModuleFile.BaseFile>(dir: string, name: string, mode: ModuleMode) : TFile | undefined => {
    const fileName = `${name}.${mode.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    const sourceFile = new Project().addSourceFileAtPath(filePath);

    if(fs.existsSync(filePath)) {
        return extractFile(sourceFile, mode) as TFile;
    }

    return undefined;
};

export const extractSchemaFile = (sourceFile: SourceFile) : ModuleFile.SchemaFile => {
    return initializeFile(sourceFile, ModuleMode.Schema) as ModuleFile.SchemaFile;
};

export const extractVariantsFile = (sourceFile: SourceFile) : ModuleFile.VariantsFile => {
    return initializeFile(sourceFile, ModuleMode.Variants) as ModuleFile.VariantsFile;
};