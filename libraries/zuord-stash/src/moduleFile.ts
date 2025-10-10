import ts from "typescript";
import { Module } from "./module";
import { $ZuordExtractor as ZE } from "zuord-extractor";

export interface ModuleFile {
    module: Module;
    snapshot: ts.IScriptSnapshot | undefined;
    source: ZE.ModuleFile | undefined;
}

export interface StoredModuleFile extends ModuleFile {
    dirty: boolean;
}