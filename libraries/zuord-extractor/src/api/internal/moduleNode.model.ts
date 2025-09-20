import { Node } from "ts-morph"

export type ModuleNode = {
    source: Node;
    kind: ModuleNodeKind;
};

export enum ModuleNodeKind {
    Unknown = "unknown",
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Function = "function",
    Variable = "variable",
}