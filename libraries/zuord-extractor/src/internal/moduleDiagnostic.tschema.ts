import { Node } from "ts-morph";

export interface BaseDiagnostic {
    node: Node;
    message: string;
    level: Level;
}

export enum Level {
    Info = "info",
    Warning = "warning",
    Error = "error"
}

//

export interface InfoDiagnostic extends BaseDiagnostic {
    level: Level.Info;
}

export interface WarningDiagnostic extends BaseDiagnostic {
    level: Level.Warning;
}

export interface ErrorDiagnostic extends BaseDiagnostic {
    level: Level.Error;
}