import { ModuleDeclaration } from "./moduleMember.model";

export type ModuleNode = {
    declaration: ModuleDeclaration;
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