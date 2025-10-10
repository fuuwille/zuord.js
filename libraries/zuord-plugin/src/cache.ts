import ts from "typescript";
import { $ZuordExtractor as ze } from "zuord-extractor";

export type ModuleEntry = {
    dirty: boolean;
    snapshot: ts.IScriptSnapshot | undefined;
    source: ze.Module | undefined;
}