import { BindingName, TypeNode, Node } from "ts-morph";
import { ModuleNode } from "./moduleNode";


export interface BaseMember {
    node: Node;
    kind: MemberKind;
}

// ESM Members
export interface ESMMember extends BaseMember, KnownMember {
    node: ModuleNode.ESMNode;
    kind: MemberKind.Import | MemberKind.Export | MemberKind.ExportDefault;
}

export interface ImportMember extends ESMMember {
    node: ModuleNode.ImportNode;
    kind: MemberKind.Import;
}

export interface ExportMember extends ESMMember {
    node: ModuleNode.ExportNode;
    kind: MemberKind.Export;
}

export interface ExportDefaultMember extends ESMMember {
    node: ModuleNode.ExportDefaultNode;
    kind: MemberKind.ExportDefault;
}

// Schema Members
export interface SchemaMember extends BaseMember, KnownMember, DefinitionLikeMember {
    node: ModuleNode.SchemaNode;
    kind: MemberKind.Type | MemberKind.Interface | MemberKind.Enum;
}

export interface TypeMember extends SchemaMember {
    node: ModuleNode.TypeNode;
    kind: MemberKind.Type;
}

export interface InterfaceMember extends SchemaMember {
    node: ModuleNode.InterfaceNode;
    kind: MemberKind.Interface;
}

export interface EnumMember extends SchemaMember {
    node: ModuleNode.EnumNode;
    kind: MemberKind.Enum;
}

// Variant Members
export interface VariantMember extends BaseMember, KnownMember, DefinitionLikeMember {
    node: ModuleNode.VariantNode;
    kind: MemberKind.Variable | MemberKind.Function;
}

export interface VariableMember extends VariantMember {
    node: ModuleNode.VariableNode;
    kind: MemberKind.Variable;
    initializer?: InitializerMember;
}

export interface FunctionMember extends VariantMember, FunctionLikeMember {
    node: ModuleNode.FunctionNode;
    kind: MemberKind.Function;
}

// Initializer Members
export interface InitializerMember extends BaseMember, KnownMember {
    node: ModuleNode.InitializerNode;
    kind: MemberKind.Value | MemberKind.ArrowFunction | MemberKind.FunctionExpression;
}

export interface ArrowFunctionMember extends InitializerMember, FunctionAltMember {
    node: ModuleNode.ArrowFunctionNode;
    kind: MemberKind.ArrowFunction;
}

export interface FunctionExpressionMember extends InitializerMember, FunctionAltMember {
    node: ModuleNode.FunctionExpressionNode;
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
    node: ModuleNode.KnownNode;
}

export interface DefinitionLikeMember extends BaseMember, KnownMember {
    node: ModuleNode.DefinitionLikeNode;
    kind: MemberKind.Type | MemberKind.Interface | MemberKind.Enum | MemberKind.Variable | MemberKind.Function;
    nameNode?: BindingName | null;
}

export interface VariableFunctionMember extends VariableMember {
    initializer?: FunctionAltMember;
}

export interface FunctionLikeMember extends BaseMember {
    node: ModuleNode.FunctionLikeNode;
    returnTypeNode?: TypeNode;
    paramTypeNode?: TypeNode;
}

export interface FunctionAltMember extends FunctionLikeMember {
    node: ModuleNode.FunctionAltNode;
    kind: MemberKind.ArrowFunction | MemberKind.FunctionExpression;
}

//

export type FunctionalMember =
    | FunctionMember
    | VariableFunctionMember;