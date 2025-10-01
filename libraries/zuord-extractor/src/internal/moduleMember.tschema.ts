import { BindingName, TypeNode, Node } from "ts-morph";
import { ModuleDefinitionLikeNode, ModuleEnumNode, ModuleESMNode, ModuleExportDefaultNode, ModuleExportNode, ModuleFunctionNode, ModuleImportNode, ModuleInterfaceNode, ModuleSchemaNode, ModuleTypeNode, ModuleVariableNode, ModuleVariantNode, ModuleInitializerNode, ModuleArrowFunctionNode, ModuleFunctionExpressionNode, ModuleFunctionLikeNode, ModuleKnownNode, ModuleFunctionAltNode } from "./moduleNode.tschema";

export interface BaseMember {
    node: Node;
    kind: MemberKind;
}

// ESM Members
export interface ESMMember extends BaseMember, KnownMember {
    node: ModuleESMNode;
    kind: MemberKind.Import | MemberKind.Export | MemberKind.ExportDefault;
}

export interface ImportMember extends ESMMember {
    node: ModuleImportNode;
    kind: MemberKind.Import;
}

export interface ExportMember extends ESMMember {
    node: ModuleExportNode;
    kind: MemberKind.Export;
}

export interface ExportDefaultMember extends ESMMember {
    node: ModuleExportDefaultNode;
    kind: MemberKind.ExportDefault;
}

// Schema Members
export interface SchemaMember extends BaseMember, KnownMember, DefinitionLikeMember {
    node: ModuleSchemaNode;
    kind: MemberKind.Type | MemberKind.Interface | MemberKind.Enum;
}

export interface TypeMember extends SchemaMember {
    node: ModuleTypeNode;
    kind: MemberKind.Type;
}

export interface InterfaceMember extends SchemaMember {
    node: ModuleInterfaceNode;
    kind: MemberKind.Interface;
}

export interface EnumMember extends SchemaMember {
    node: ModuleEnumNode;
    kind: MemberKind.Enum;
}

// Variant Members
export interface VariantMember extends BaseMember, KnownMember, DefinitionLikeMember {
    node: ModuleVariantNode;
    kind: MemberKind.Variable | MemberKind.Function;
}

export interface VariableMember extends VariantMember {
    node: ModuleVariableNode;
    kind: MemberKind.Variable;
    initializer?: InitializerMember;
}

export interface FunctionMember extends VariantMember, FunctionLikeMember {
    node: ModuleFunctionNode;
    kind: MemberKind.Function;
}

// Initializer Members
export interface InitializerMember extends BaseMember, KnownMember {
    node: ModuleInitializerNode;
    kind: MemberKind.Value | MemberKind.ArrowFunction | MemberKind.FunctionExpression;
}

export interface ArrowFunctionMember extends InitializerMember, FunctionAltMember {
    node: ModuleArrowFunctionNode;
    kind: MemberKind.ArrowFunction;
}

export interface FunctionExpressionMember extends InitializerMember, FunctionAltMember {
    node: ModuleFunctionExpressionNode;
    kind: MemberKind.FunctionExpression;
}

//

export enum MemberKind {
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

export interface UnknownMember extends BaseMember {
    kind: MemberKind.Unknown;
}

export interface KnownMember extends BaseMember {
    node: ModuleKnownNode;
}

export interface DefinitionLikeMember extends BaseMember, KnownMember {
    node: ModuleDefinitionLikeNode;
    kind: MemberKind.Type | MemberKind.Interface | MemberKind.Enum | MemberKind.Variable | MemberKind.Function;
    nameNode?: BindingName | null;
}

export interface VariableFunctionMember extends VariableMember {
    initializer?: FunctionAltMember;
}

export interface FunctionLikeMember extends BaseMember {
    node: ModuleFunctionLikeNode;
    returnTypeNode?: TypeNode;
    paramTypeNode?: TypeNode;
}

export interface FunctionAltMember extends FunctionLikeMember {
    node: ModuleFunctionAltNode;
    kind: MemberKind.ArrowFunction | MemberKind.FunctionExpression;
}

//

export type FunctionalMember =
    | FunctionMember
    | VariableFunctionMember;