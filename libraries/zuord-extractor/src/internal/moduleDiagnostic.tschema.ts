import { ModuleNode } from "./moduleNode.tschema"

export type ModuleDiagnostic = {
    node: ModuleNode
    message: string
}