import ts from "typescript";

export type FileEntry = {
    dirty: boolean;
    snapshot: ts.IScriptSnapshot | undefined;
}