import { Node } from "ts-morph";
import { ModuleDiagnosticLevel } from "./moduleDiagnostic";

export interface Base {
    node: Node;
    message: string;
    level: ModuleDiagnosticLevel;
}

//

export interface Info extends Base {
    level: ModuleDiagnosticLevel.Info;
}

export interface Warning extends Base {
    level: ModuleDiagnosticLevel.Warning;
}

export interface Error extends Base {
    level: ModuleDiagnosticLevel.Error;
}