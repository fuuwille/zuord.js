import ts from "typescript";
import { ModuleDocument } from "./moduleDocument";

export type ModuleFile = {
    document: ModuleDocument;
    snapshot: ts.IScriptSnapshot;
}