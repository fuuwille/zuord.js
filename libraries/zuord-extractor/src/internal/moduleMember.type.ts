import { Type } from "ts-morph";
import { ModuleTypeLikeNode, ModuleVariantLikeNode, ModuleESMLikeNode, ModuleNode, ModuleImportNode, ModuleExportNode, ModuleExportDefaultNode, ModuleTypeNode, ModuleInterfaceNode, ModuleFunctionNode, ModuleVariableNode, ModuleEnumNode, ModuleExportLikeNode, ModuleDefinitionLikeNode } from "./moduleNode.type";
import { ModuleFunctionRef, ModuleRef, ModuleTypeLikeRef, ModuleVariantLikeRef } from "./moduleRef.type";

export interface ModuleMember {
    ref?: ModuleRef,
    kind: ModuleMemberKind;
    slot?: ModuleMemberSlot;
    errors?: string[];
};

export interface ModuleUnknownMember extends ModuleMember {
    kind: ModuleMemberKind.Unknown;
    ref: never;
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

export interface ModuleDefinitionLikeMember extends ModuleMember {
    node: ModuleDefinitionLikeNode;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Enum | ModuleMemberKind.Function | ModuleMemberKind.Variable;
    id: string;
}

export interface ModuleTypeLikeMember extends ModuleDefinitionLikeMember {
    node: ModuleTypeLikeNode;
    ref: ModuleTypeLikeRef;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Enum;
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

export interface ModuleVariantLikeMember extends ModuleDefinitionLikeMember {
    node: ModuleVariantLikeNode;
    ref: ModuleVariantLikeRef;
    kind: ModuleMemberKind.Function | ModuleMemberKind.Variable;
}

export interface ModuleFunctionMember extends ModuleVariantLikeMember {
    node: ModuleFunctionNode;
    ref: ModuleFunctionRef;
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