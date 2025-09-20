import { ModuleModelNode } from "./moduleNode.model";

export interface ModuleMember {
    kind: ModuleMemberKind;
};

export interface ModuleModelMember extends ModuleMember {
    node: ModuleModelNode;
}

export enum ModuleMemberKind {
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Function = "function",
    Variable = "variable",
}