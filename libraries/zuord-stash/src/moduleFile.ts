import ts from "typescript";
import { ModuleDocument } from "./moduleDocument";
import { $ZuordExtractor as ZE } from "zuord-extractor";

export type ModuleFile = {
    document: ModuleDocument;
    snapshot: ts.IScriptSnapshot | undefined;
    source: ZE.ModuleFile | undefined;
}