import { Node } from "ts-morph";

export interface Common {
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

export interface Info extends Common {
    level: Level.Info;
}

export interface Warning extends Common {
    level: Level.Warning;
}

export interface Error extends Common {
    level: Level.Error;
}