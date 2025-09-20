import { ModuleMemberNode, ModuleMemberModelNode, ModuleMemberVariantNode } from "./moduleMemberNode.model";

export interface ModuleMember {
    node: ModuleMemberNode
    kind: ModuleMemberKind;
    slot?: ModuleMemberSlot;
    errors: string[];
};

export interface ModuleModelMember extends ModuleMember {
    node: ModuleMemberModelNode;
}

export interface ModuleVariantMember extends ModuleMember {
    node: ModuleMemberVariantNode;
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