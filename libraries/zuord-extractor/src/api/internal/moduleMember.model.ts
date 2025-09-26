import { ModuleTypeLikeNode, ModuleVariantLikeNode, ModuleESMNode, ModuleNode } from "./moduleNode.model";

export interface ModuleMember {
    node: ModuleNode
    kind: ModuleMemberKind;
    slot?: ModuleMemberSlot;
    errors?: string[];
};

export interface ModuleUnknownMember extends ModuleMember {
    kind: ModuleMemberKind.Unknown;
}

export interface ModuleESMMember extends ModuleMember {
    node: ModuleESMNode;
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.Default;
}

export interface ModuleModelMember extends ModuleMember {
    node: ModuleTypeLikeNode;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Enum;
    id: string;
}

export interface ModuleVariantMember extends ModuleMember {
    node: ModuleVariantLikeNode;
    kind: ModuleMemberKind.Function | ModuleMemberKind.Variable;
    target: string;
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