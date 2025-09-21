import { ModuleMemberNode, ModuleMemberModelNode, ModuleMemberVariantNode, ModuleMemberESMNode } from "./moduleMemberNode.model";

export interface ModuleMember {
    node: ModuleMemberNode
    kind: ModuleMemberKind;
    slot?: ModuleMemberSlot;
    errors?: string[];
};

export interface ModuleRawMember extends ModuleMember {
    errors: string[];
}

export interface ModuleESMMember extends ModuleMember {
    node: ModuleMemberESMNode;
}

export interface ModuleModelMember extends ModuleMember {
    node: ModuleMemberModelNode;
}

export interface ModuleVariantMember extends ModuleMember {
    node: ModuleMemberVariantNode;
}

export enum ModuleMemberKind {
    Unknown = "unknown",
    Import = "import",
    Export = "export",
    Default = "default",
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