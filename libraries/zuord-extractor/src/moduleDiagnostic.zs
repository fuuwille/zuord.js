import { Node } from "ts-morph";
import { ModuleDiagnosticLevel } from "./moduleDiagnostic";

export interface Common {
    node: Node;
    message: string;
    level: ModuleDiagnosticLevel;
}

//

export interface Info extends Common {
    level: ModuleDiagnosticLevel.Info;
}

export interface Warning extends Common {
    level: ModuleDiagnosticLevel.Warning;
}

export interface Error extends Common {
    level: ModuleDiagnosticLevel.Error;
}