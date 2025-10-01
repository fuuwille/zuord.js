import { ModuleDiagnosticLevel, ModuleErrorDiagnostic, ModuleInfoDiagnostic, ModuleWarningDiagnostic } from "./moduleDiagnostic.tschema";
import { ModuleNode } from "./moduleNode.tschema";

export const createModuleInfoDiagnostic = (node: ModuleNode, message: string): ModuleInfoDiagnostic => {
    return { node, message, level: ModuleDiagnosticLevel.Info };
}

export const createModuleWarningDiagnostic = (node: ModuleNode, message: string): ModuleWarningDiagnostic => {
    return { node, message, level: ModuleDiagnosticLevel.Warning };
}

export const createModuleErrorDiagnostic = (node: ModuleNode, message: string): ModuleErrorDiagnostic => {
    return { node, message, level: ModuleDiagnosticLevel.Error };
}

//

export const getModuleNoReturnTypeDiagnostic = (node: ModuleNode): ModuleErrorDiagnostic => {
    return createModuleErrorDiagnostic(node, "Return type must be specified");
}