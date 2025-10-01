import { ModuleNode } from "./moduleNode.tschema"

export interface Base {
    node: ModuleNode;
    message: string;
    level: Level;
}

export enum Level {
    Info = "info",
    Warning = "warning",
    Error = "error"
}

//

export interface Info extends Base {
    level: Level.Info;
}

export interface Warning extends Base {
    level: Level.Warning;
}

export interface Error extends Base {
    level: Level.Error;
}