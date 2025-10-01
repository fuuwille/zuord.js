import { ModuleNode } from "./moduleNode.tschema"

export type ModuleDiagnostic = {
    node: ModuleNode
    message: string
}

export enum ModuleDiagnosticLevel {
    Info = "info",
    Warning = "warning",
    Error = "error"
}