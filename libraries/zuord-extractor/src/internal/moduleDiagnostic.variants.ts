import { ModuleDiagnostic } from "./moduleDiagnostic";
import { ModuleNode } from "./moduleNode.tschema";

export const info = (node: ModuleNode, message: string): ModuleDiagnostic.Info => {
    return { node, message, level: ModuleDiagnostic.Level.Info };
}

export const warning = (node: ModuleNode, message: string): ModuleDiagnostic.Warning => {
    return { node, message, level: ModuleDiagnostic.Level.Warning };
}

export const error = (node: ModuleNode, message: string): ModuleDiagnostic.Error => {
    return { node, message, level: ModuleDiagnostic.Level.Error };
}

//

export const noReturnType = (node: ModuleNode): ModuleDiagnostic.Error => {
    return error(node, "Return type must be specified");
}