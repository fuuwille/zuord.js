import { Identifier, TypeNode } from "ts-morph";
import { ModuleDefinitionNode, ModuleEnumNode, ModuleESMNode, ModuleDefaultNode, ModuleExportNode, ModuleFunctionNode, ModuleImportNode, ModuleInterfaceNode, ModuleNode, ModuleSchemaNode, ModuleTypeNode, ModuleVariableNode, ModuleVariantNode, ModuleInitializerNode, ModuleArrowFunctionNode, ModuleFunctionExpressionNode, ModuleFunctionLikeNode } from "./moduleNode.tschema";

export interface ModuleMember {
    node: ModuleNode;
    kind: ModuleMemberKind;
    nameNode?: Identifier | null;
}

// ESM Members
export interface ModuleESMMember extends ModuleMember {
    node: ModuleESMNode;
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.Default;
}

export interface ModuleImportMember extends ModuleESMMember {
    node: ModuleImportNode;
    kind: ModuleMemberKind.Import;
}

export interface ModuleExportMember extends ModuleESMMember {
    node: ModuleExportNode;
    kind: ModuleMemberKind.Export;
}

export interface ModuleDefaultMember extends ModuleESMMember {
    node: ModuleDefaultNode;
    kind: ModuleMemberKind.Default;
}

// Definition Members
export interface ModuleDefinitionMember extends ModuleMember {
    node: ModuleDefinitionNode;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Enum | ModuleMemberKind.Variable | ModuleMemberKind.Function;
}

// Schema Members
export interface ModuleSchemaMember extends ModuleDefinitionMember {
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
export interface ModuleVariantMember extends ModuleDefinitionMember {
    node: ModuleVariantNode;
    kind: ModuleMemberKind.Variable | ModuleMemberKind.Function;
    typeNode?: TypeNode;
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

export interface ModuleInitializerMember extends ModuleMember {
    node: ModuleInitializerNode;
    kind: ModuleMemberKind.Value | ModuleMemberKind.ArrowFunction | ModuleMemberKind.FunctionExpression;
    typeNode?: TypeNode;
}

export interface ModuleArrowFunctionMember extends ModuleInitializerMember, ModuleFunctionLikeMember {
    node: ModuleArrowFunctionNode;
    kind: ModuleMemberKind.ArrowFunction;
}

export interface ModuleFunctionExpressionMember extends ModuleInitializerMember, ModuleFunctionLikeMember {
    node: ModuleFunctionExpressionNode;
    kind: ModuleMemberKind.FunctionExpression;
}

//

export enum ModuleMemberKind {
    Unknown = "unknown",
    Import = "import",
    Export = "export",
    Default = "default",
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

export interface ModuleFunctionLikeMember extends ModuleMember {
    node: ModuleFunctionLikeNode;
    typeNode?: TypeNode;
    paramTypeNode?: TypeNode;
}