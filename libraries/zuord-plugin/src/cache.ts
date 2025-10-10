import ts from "typescript";
import { $ZuordExtractor as ZE } from "zuord-extractor";

export type ModuleEntry = {
    dirty: boolean;
    snapshot: ts.IScriptSnapshot | undefined;
    source: ZE.Module | undefined;
}

