import { ModuleMember } from "./_moduleMember.model";

export type ModuleNode = {
    declaration: ModuleMember;
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