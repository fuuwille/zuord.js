import fs from "fs";
import path from "path";
import { Project, SourceFile } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleFile } from "./moduleFile";
import { isDiscarded, isKnownLike } from "./moduleNode.tvariants";
import { create } from "./moduleMember.tvariants";

export const initialize = (
    sourceFile: SourceFile, mode: ModuleMode
) : ModuleFile.Base => {

    const moduleFile : ModuleFile.Base = {
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

export const extract = (sourceFile: SourceFile, mode: ModuleMode) : ModuleFile.Base => {
    switch(mode) {
        case ModuleMode.Schema:
            return extractSchema(sourceFile);
        case ModuleMode.Variants:
            return extractVariants(sourceFile);
        default:
            throw new Error(`Unknown module file kind: ${mode}`);
    }
};

export const extractAtPath = <TFile extends ModuleFile.Base>(dir: string, name: string, mode: ModuleMode) : TFile | undefined => {
    const fileName = `${name}.${mode.toLowerCase()}.ts`;
    const filePath = path.join(dir, fileName);

    const sourceFile = new Project().addSourceFileAtPath(filePath);

    if(fs.existsSync(filePath)) {
        return extract(sourceFile, mode) as TFile;
    }

    return undefined;
};

export const extractSchema = (sourceFile: SourceFile) : ModuleFile.Schema => {
    return initialize(sourceFile, ModuleMode.Schema) as ModuleFile.Schema;
};

export const extractVariants = (sourceFile: SourceFile) : ModuleFile.Variants => {
    return initialize(sourceFile, ModuleMode.Variants) as ModuleFile.Variants;
};