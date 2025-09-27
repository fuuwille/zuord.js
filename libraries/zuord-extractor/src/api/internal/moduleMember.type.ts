import { ModuleTypeLikeNode, ModuleVariantLikeNode, ModuleESMLikeNode, ModuleNode, ModuleImportNode, ModuleExportNode, ModuleDefaultNode, ModuleTypeNode, ModuleInterfaceNode, ModuleFunctionNode } from "./moduleNode.type";

export interface ModuleMember {
    node: ModuleNode
    kind: ModuleMemberKind;
    slot?: ModuleMemberSlot;
    errors?: string[];
};

export interface ModuleUnknownMember extends ModuleMember {
    kind: ModuleMemberKind.Unknown;
}

export interface ModuleESMLikeMember extends ModuleMember {
    node: ModuleESMLikeNode;
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.Default;
}

export interface ModuleImportMember extends ModuleESMLikeMember {
    node: ModuleImportNode;
    kind: ModuleMemberKind.Import;
}

export interface ModuleExportMember extends ModuleESMLikeMember {
    node: ModuleExportNode;
    kind: ModuleMemberKind.Export;
}

export interface ModuleDefaultMember extends ModuleESMLikeMember {
    node: ModuleDefaultNode;
    kind: ModuleMemberKind.Default;
}

export interface ModuleTypeLikeMember extends ModuleMember {
    node: ModuleTypeLikeNode;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Enum;
    id: string;
}

export interface ModuleTypeMember extends ModuleTypeLikeMember {
    node: ModuleTypeNode;
    kind: ModuleMemberKind.Type;
}

export interface ModuleInterfaceMember extends ModuleTypeLikeMember {
    node: ModuleInterfaceNode;
    kind: ModuleMemberKind.Interface;
}

export interface ModuleDefaultMember extends ModuleESMLikeMember {
    node: ModuleDefaultNode;
    kind: ModuleMemberKind.Default;
}

export interface ModuleVariantLikeMember extends ModuleMember {
    node: ModuleVariantLikeNode;
    kind: ModuleMemberKind.Function | ModuleMemberKind.Variable;
    target: string;
}

export interface ModuleFunctionMember extends ModuleVariantLikeMember {
    node: ModuleFunctionNode;
    kind: ModuleMemberKind.Function;
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