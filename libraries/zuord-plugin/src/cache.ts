import ts from "typescript";

export type ModuleEntry = {
    dirty: boolean;
    snapshot: ts.IScriptSnapshot | undefined;
}