import { ModuleNode } from "./moduleNode.tschema"

export interface ModuleDiagnostic {
    node: ModuleNode;
    message: string;
    level: ModuleDiagnosticLevel;
}

export enum ModuleDiagnosticLevel {
    Info = "info",
    Warning = "warning",
    Error = "error"
}

//

export interface ModuleInfoDiagnostic extends ModuleDiagnostic {
    level: ModuleDiagnosticLevel.Info;
}

export interface ModuleWarningDiagnostic extends ModuleDiagnostic {
    level: ModuleDiagnosticLevel.Warning;
}

export interface ModuleErrorDiagnostic extends ModuleDiagnostic {
    level: ModuleDiagnosticLevel.Error;
}