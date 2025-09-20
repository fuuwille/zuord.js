import { ModuleNode, ModuleModelNode, ModuleVariantNode } from "./moduleNode.model";

export interface ModuleMember {
    node: ModuleNode
    kind: ModuleMemberKind;
    slot?: ModuleMemberSlot;
};

export interface ModuleModelMember extends ModuleMember {
    node: ModuleModelNode;
}

export interface ModuleVariantMember extends ModuleMember {
    node: ModuleVariantNode;
}

export enum ModuleMemberKind {
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Function = "function",
    Variable = "variable",
}

export enum ModuleMemberSlot {
    Value = "value",
    Function = "function"
}