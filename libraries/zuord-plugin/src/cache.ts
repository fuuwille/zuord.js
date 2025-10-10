import ts from "typescript";
import { $ZuordExtractor as ZE } from "zuord-extractor";

export type ModuleDocument = {
    dirty: boolean;
    snapshot: ts.IScriptSnapshot | undefined;
    source: ZE.Module | undefined;
}

const cache = new Map<string, ModuleDocument>();

export const moduleEntry = (fileName: string) => {
    return cache.get(fileName);
}