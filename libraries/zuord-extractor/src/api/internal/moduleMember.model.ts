import { ModuleNode as ModuleNode } from "./moduleNode.model";

export type ModuleMember = {
    declaration: ModuleNode;
    kind: ModuleMemberKind;
};

export enum ModuleMemberKind {
    Unknown = "unknown",
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Function = "function",
    Variable = "variable",
}