import ts from "typescript";
import { Module } from "./module";
import { $ZuordExtractor as ZE } from "zuord-extractor";

export const dirtySymbol = Symbol("dirty");

export interface ModuleFile {
    [dirtySymbol]: boolean;
    module: Module;
    snapshot: ts.IScriptSnapshot | undefined;
    source: ZE.ModuleFile | undefined;
}