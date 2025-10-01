import { Node } from "ts-morph";
import { ModuleDiagnostic } from "./moduleDiagnostic";

export const infoDiagnostic = (node: Node, message: string): ModuleDiagnostic.InfoDiagnostic => {
    return { node, message, level: ModuleDiagnostic.Level.Info };
}

export const warningDiagnostic = (node: Node, message: string): ModuleDiagnostic.WarningDiagnostic => {
    return { node, message, level: ModuleDiagnostic.Level.Warning };
}

export const errorDiagnostic = (node: Node, message: string): ModuleDiagnostic.ErrorDiagnostic => {
    return { node, message, level: ModuleDiagnostic.Level.Error };
}

//

export const buildInDiagnostics = {
    noReturnType: (node: Node): ModuleDiagnostic.ErrorDiagnostic => {
        return errorDiagnostic(node, "Return type must be specified");
    }
}