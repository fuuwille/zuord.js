import { ModuleDiagnosticLevel, ModuleErrorDiagnostic, ModuleInfoDiagnostic, ModuleWarningDiagnostic } from "./moduleDiagnostic.tschema";
import { ModuleNode } from "./moduleNode.tschema";

export const info = (node: ModuleNode, message: string): ModuleInfoDiagnostic => {
    return { node, message, level: ModuleDiagnosticLevel.Info };
}

export const warning = (node: ModuleNode, message: string): ModuleWarningDiagnostic => {
    return { node, message, level: ModuleDiagnosticLevel.Warning };
}

export const error = (node: ModuleNode, message: string): ModuleErrorDiagnostic => {
    return { node, message, level: ModuleDiagnosticLevel.Error };
}

//

export const noReturnType = (node: ModuleNode): ModuleErrorDiagnostic => {
    return error(node, "Return type must be specified");
}