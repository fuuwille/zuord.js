import { Type } from "ts-morph";
import { ModuleTypeLikeNode, ModuleVariantLikeNode, ModuleESMLikeNode, ModuleNode, ModuleImportNode, ModuleExportNode, ModuleExportDefaultNode, ModuleTypeNode, ModuleInterfaceNode, ModuleFunctionNode, ModuleVariableNode, ModuleEnumNode, ModuleExportLikeNode } from "./moduleNode.type";

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
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.ExportDefault;
}

export interface ModuleImportMember extends ModuleESMLikeMember {
    node: ModuleImportNode;
    kind: ModuleMemberKind.Import;
}

export interface ModuleExportLikeMember extends ModuleESMLikeMember {
    node: ModuleExportLikeNode;
    kind: ModuleMemberKind.Export | ModuleMemberKind.ExportDefault;
}

export interface ModuleExportMember extends ModuleExportLikeMember {
    node: ModuleExportNode;
    kind: ModuleMemberKind.Export;
}

export interface ModuleExportDefaultMember extends ModuleExportLikeMember {
    node: ModuleExportDefaultNode;
    kind: ModuleMemberKind.ExportDefault;
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

export interface ModuleEnumMember extends ModuleTypeLikeMember {
    node: ModuleEnumNode;
    kind: ModuleMemberKind.Enum;
}

export interface ModuleVariantLikeMember extends ModuleMember {
    node: ModuleVariantLikeNode;
    kind: ModuleMemberKind.Function | ModuleMemberKind.Variable;
    type?: Type;
}

export interface ModuleFunctionMember extends ModuleVariantLikeMember {
    node: ModuleFunctionNode;
    kind: ModuleMemberKind.Function;
}

export interface ModuleVariableMember extends ModuleVariantLikeMember {
    node: ModuleVariableNode;
    kind: ModuleMemberKind.Variable;
}

export enum ModuleMemberKind {
    Unknown = "unknown",
    Import = "import",
    Export = "export",
    ExportDefault = "export-default",
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