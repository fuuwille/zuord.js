import { ModuleNode as ModuleNode } from "./moduleNode.model";

export type ModuleMember = {
    node: ModuleNode;
    kind: ModuleMemberKind;
};

export enum ModuleMemberKind {
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Function = "function",
    Variable = "variable",
}