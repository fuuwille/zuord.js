import ts from "typescript";
import { ModuleDocument } from "./moduleDocument";
import { $ZuordExtractor as ZE } from "zuord-extractor";

export interface ModuleFile {
    document: ModuleDocument;
    snapshot: ts.IScriptSnapshot | undefined;
    source: ZE.ModuleFile | undefined;
}

export interface StoredModuleFile extends ModuleFile {
    dirt: boolean;
}