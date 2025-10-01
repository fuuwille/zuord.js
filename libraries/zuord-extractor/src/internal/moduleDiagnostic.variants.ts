import { Node } from "ts-morph";
import { ModuleDiagnostic } from "./moduleDiagnostic";

export const info = (node: Node, message: string): ModuleDiagnostic.Info => {
    return { node, message, level: ModuleDiagnostic.Level.Info };
}

export const warning = (node: Node, message: string): ModuleDiagnostic.Warning => {
    return { node, message, level: ModuleDiagnostic.Level.Warning };
}

export const error = (node: Node, message: string): ModuleDiagnostic.Error => {
    return { node, message, level: ModuleDiagnostic.Level.Error };
}

//

export const noReturnType = (node: Node): ModuleDiagnostic.Error => {
    return error(node, "Return type must be specified");
}