import { BindingName, TypeNode, Node } from "ts-morph";
import { ModuleNode } from "./moduleNode";


export interface BaseMember {
    node: Node;
    kind: MemberKind;
}

// ESM Members
export interface ESMMember extends BaseMember, KnownMember {
    node: ModuleNode.ESMNode;
    kind: MemberImportKind | MemberExportKind | MemberExportDefaultKind;
}

export interface ImportMember extends ESMMember {
    node: ModuleNode.ImportNode;
    kind: MemberImportKind;
}

export interface ExportMember extends ESMMember {
    node: ModuleNode.ExportNode;
    kind: MemberExportKind;
}

export interface ExportDefaultMember extends ESMMember {
    node: ModuleNode.ExportDefaultNode;
    kind: MemberExportDefaultKind;
}

// Schema Members
export interface SchemaMember extends BaseMember, KnownMember, DefinitionLikeMember {
    node: ModuleNode.SchemaNode;
    kind: MemberTypeKind | MemberInterfaceKind;
}

export interface TypeMember extends SchemaMember {
    node: ModuleNode.TypeNode;
    kind: MemberTypeKind;
}

export interface InterfaceMember extends SchemaMember {
    node: ModuleNode.InterfaceNode;
    kind: MemberInterfaceKind;
}

// Variant Members
export interface VariantMember extends BaseMember, KnownMember, DefinitionLikeMember {
    node: ModuleNode.VariantNode;
    kind: MemberVariableKind | MemberFunctionKind;
}

export interface VariableMember extends VariantMember {
    node: ModuleNode.VariableNode;
    kind: MemberVariableKind;
    initializer?: InitializerMember;
}

export interface FunctionMember extends VariantMember, FunctionLikeMember {
    node: ModuleNode.FunctionNode;
    kind: MemberFunctionKind;
}

// Initializer Members
export interface InitializerMember extends BaseMember, KnownMember {
    node: ModuleNode.InitializerNode;
    kind: MemberValueKind | MemberArrowFunctionKind | MemberFunctionExpressionKind;
}

export interface ArrowFunctionMember extends InitializerMember, FunctionAltMember {
    node: ModuleNode.ArrowFunctionNode;
    kind: MemberArrowFunctionKind;
}

export interface FunctionExpressionMember extends InitializerMember, FunctionAltMember {
    node: ModuleNode.FunctionExpressionNode;
    kind: MemberFunctionExpressionKind;
}

//

export type MemberKind =
    | MemberUnknownKind
    | MemberImportKind
    | MemberExportKind
    | MemberExportDefaultKind
    | MemberTypeKind
    | MemberInterfaceKind
    | MemberVariableKind
    | MemberFunctionKind
    | MemberValueKind
    | MemberArrowFunctionKind
    | MemberFunctionExpressionKind;

export type MemberUnknownKind = "unknown";

export type MemberImportKind = "import";

export type MemberExportKind = "export";

export type MemberExportDefaultKind = "exportDefault";

export type MemberTypeKind = "type";

export type MemberInterfaceKind = "interface";

export type MemberVariableKind = "variable";

export type MemberFunctionKind = "function";

export type MemberValueKind = "value";

export type MemberArrowFunctionKind = "arrowFunction";

export type MemberFunctionExpressionKind = "functionExpression";

//

export interface UnknownMember extends BaseMember {
    kind: MemberUnknownKind;
}

export interface KnownMember extends BaseMember {
    node: ModuleNode.KnownNode;
}

export interface DefinitionLikeMember extends BaseMember, KnownMember {
    node: ModuleNode.DefinitionLikeNode;
    kind: MemberTypeKind | MemberInterfaceKind | MemberVariableKind | MemberFunctionKind;
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
    kind: MemberArrowFunctionKind | MemberFunctionExpressionKind;
}

//

export type FunctionalMember =
    | FunctionMember
    | VariableFunctionMember;