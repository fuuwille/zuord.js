import { ModuleNode } from "./moduleNode.tschema"

export type ModuleDiagnostic = {
    node: ModuleNode;
    message: string;
    level: ModuleDiagnosticLevel;
}

export enum ModuleDiagnosticLevel {
    Info = "info",
    Warning = "warning",
    Error = "error"
}