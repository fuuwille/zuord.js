import { BindingName, TypeNode } from "ts-morph";
import { ModuleDefinitionLikeNode, ModuleEnumNode, ModuleESMNode, ModuleExportDefaultNode, ModuleExportNode, ModuleFunctionNode, ModuleImportNode, ModuleInterfaceNode, ModuleNode, ModuleSchemaNode, ModuleTypeNode, ModuleVariableNode, ModuleVariantNode, ModuleInitializerNode, ModuleArrowFunctionNode, ModuleFunctionExpressionNode, ModuleFunctionLikeNode, ModuleKnownNode, ModuleFunctionAltNode } from "./moduleNode.tschema";

export interface ModuleMember {
    node: ModuleNode;
    kind: ModuleMemberKind;
}

// ESM Members
export interface ModuleESMMember extends ModuleMember, ModuleKnownMember {
    node: ModuleESMNode;
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.ExportDefault;
}

export interface ModuleImportMember extends ModuleESMMember {
    node: ModuleImportNode;
    kind: ModuleMemberKind.Import;
}

export interface ModuleExportMember extends ModuleESMMember {
    node: ModuleExportNode;
    kind: ModuleMemberKind.Export;
}

export interface ModuleExportDefaultMember extends ModuleESMMember {
    node: ModuleExportDefaultNode;
    kind: ModuleMemberKind.ExportDefault;
}

// Schema Members
export interface ModuleSchemaMember extends ModuleMember, ModuleKnownMember, ModuleDefinitionLikeMember {
    node: ModuleSchemaNode;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Enum;
}

export interface ModuleTypeMember extends ModuleSchemaMember {
    node: ModuleTypeNode;
    kind: ModuleMemberKind.Type;
}

export interface ModuleInterfaceMember extends ModuleSchemaMember {
    node: ModuleInterfaceNode;
    kind: ModuleMemberKind.Interface;
}

export interface ModuleEnumMember extends ModuleSchemaMember {
    node: ModuleEnumNode;
    kind: ModuleMemberKind.Enum;
}

// Variant Members
export interface ModuleVariantMember extends ModuleMember, ModuleKnownMember, ModuleDefinitionLikeMember {
    node: ModuleVariantNode;
    kind: ModuleMemberKind.Variable | ModuleMemberKind.Function;
}

export interface ModuleVariableMember extends ModuleVariantMember {
    node: ModuleVariableNode;
    kind: ModuleMemberKind.Variable;
    initializer?: ModuleInitializerMember;
}

export interface ModuleFunctionMember extends ModuleVariantMember, ModuleFunctionLikeMember {
    node: ModuleFunctionNode;
    kind: ModuleMemberKind.Function;
}

// Initializer Members
export interface ModuleInitializerMember extends ModuleMember, ModuleKnownMember {
    node: ModuleInitializerNode;
    kind: ModuleMemberKind.Value | ModuleMemberKind.ArrowFunction | ModuleMemberKind.FunctionExpression;
}

export interface ModuleArrowFunctionMember extends ModuleInitializerMember, ModuleFunctionAltMember {
    node: ModuleArrowFunctionNode;
    kind: ModuleMemberKind.ArrowFunction;
}

export interface ModuleFunctionExpressionMember extends ModuleInitializerMember, ModuleFunctionAltMember {
    node: ModuleFunctionExpressionNode;
    kind: ModuleMemberKind.FunctionExpression;
}

//

export enum ModuleMemberKind {
    Unknown = "unknown",
    Import = "import",
    Export = "export",
    ExportDefault = "exportDefault",
    Type = "type",
    Interface = "interface",
    Enum = "enum",
    Class = "class",
    Variable = "variable",
    Function = "function",
    Value = "value",
    ArrowFunction = "arrowFunction",
    FunctionExpression = "functionExpression"
}

//

export interface ModuleUnknownMember extends ModuleMember {
    kind: ModuleMemberKind.Unknown;
}

export interface ModuleKnownMember extends ModuleMember {
    node: ModuleKnownNode;
}

export interface ModuleDefinitionLikeMember extends ModuleMember, ModuleKnownMember {
    node: ModuleDefinitionLikeNode;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Enum | ModuleMemberKind.Variable | ModuleMemberKind.Function;
    nameNode?: BindingName | null;
}

export interface ModuleVariableFunctionMember extends ModuleVariableMember {
    initializer?: ModuleFunctionAltMember;
}

export interface ModuleFunctionLikeMember extends ModuleMember {
    node: ModuleFunctionLikeNode;
    returnTypeNode?: TypeNode;
    paramTypeNode?: TypeNode;
}

export interface ModuleFunctionAltMember extends ModuleFunctionLikeMember {
    node: ModuleFunctionAltNode;
    kind: ModuleMemberKind.ArrowFunction | ModuleMemberKind.FunctionExpression;
}