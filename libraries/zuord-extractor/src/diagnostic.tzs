import { Node } from "ts-morph";
import { ModuleDiagnosticLevel } from "./moduleDiagnostic";

export interface Base {
    node: Node;
    message: string;
    level: ModuleDiagnosticLevel;
}

//

export interface Info extends ZSchema.Base {
    level: ModuleDiagnosticLevel.Info;
}

export interface Warning extends ZSchema.Base {
    level: ModuleDiagnosticLevel.Warning;
}

export interface Error extends ZSchema.Base {
    level: ModuleDiagnosticLevel.Error;
}