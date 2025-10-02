import { Node } from "ts-morph";
import { ModuleDiagnostic } from "./moduleDiagnostic";
import { moduleDiagnosticLevel } from "./moduleDiagnosticLevel";

export const info = (node: Node, message: string): ModuleDiagnostic.Info => {
    return { node, message, level: moduleDiagnosticLevel.Info };
}

export const warning = (node: Node, message: string): ModuleDiagnostic.Warning => {
    return { node, message, level: moduleDiagnosticLevel.Warning };
}

export const error = (node: Node, message: string): ModuleDiagnostic.Error => {
    return { node, message, level: moduleDiagnosticLevel.Error };
}

//

export const buildInDiagnostics = {
    noReturnType: (node: Node): ModuleDiagnostic.Error => {
        return error(node, "Return type must be specified");
    }
}