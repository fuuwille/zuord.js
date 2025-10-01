import { BindingName, TypeNode, Node } from "ts-morph";
import { ModuleNode } from "./moduleNode";

export type MemberKind =
    | UnknownKind
    | ImportKind
    | ExportKind
    | ExportDefaultKind
    | TypeKind
    | InterfaceKind
    | VariableKind
    | FunctionKind
    | ValueKind
    | ArrowFunctionKind
    | FunctionExpressionKind;

export type UnknownKind = "unknown";

export type ImportKind = "import";

export type ExportKind = "export";

export type ExportDefaultKind = "exportDefault";

export type TypeKind = "type";

export type InterfaceKind = "interface";

export type VariableKind = "variable";

export type FunctionKind = "function";

export type ValueKind = "value";

export type ArrowFunctionKind = "arrowFunction";

export type FunctionExpressionKind = "functionExpression";

//

export interface BaseMember {
    node: Node;
    kind: MemberKind;
}

export interface UnknownMember extends BaseMember {
    kind: UnknownKind;
}

export interface ImportMember extends ESMLikeMember {
    node: ModuleNode.ImportNode;
    kind: ImportKind;
}

export interface ExportMember extends ESMLikeMember {
    node: ModuleNode.ExportNode;
    kind: ExportKind;
}

export interface ExportDefaultMember extends ESMLikeMember {
    node: ModuleNode.ExportDefaultNode;
    kind: ExportDefaultKind;
}

export interface TypeMember extends SchemaLikeMember {
    node: ModuleNode.TypeNode;
    kind: TypeKind;
}

export interface InterfaceMember extends SchemaLikeMember {
    node: ModuleNode.InterfaceNode;
    kind: InterfaceKind;
}

// Variant Members
export interface VariantMember extends BaseMember, KnownMember, DefinitionLikeMember {
    node: ModuleNode.VariantNode;
    kind: VariableKind | FunctionKind;
}

export interface VariableMember extends VariantMember {
    node: ModuleNode.VariableNode;
    kind: VariableKind;
    initializer?: InitializerMember;
}

export interface FunctionMember extends VariantMember, FunctionLikeMember {
    node: ModuleNode.FunctionNode;
    kind: FunctionKind;
}

// Initializer Members
export interface InitializerMember extends BaseMember, KnownMember {
    node: ModuleNode.InitializerNode;
    kind: ValueKind | ArrowFunctionKind | FunctionExpressionKind;
}

export interface ArrowFunctionMember extends InitializerMember, FunctionAltMember {
    node: ModuleNode.ArrowFunctionNode;
    kind: ArrowFunctionKind;
}

export interface FunctionExpressionMember extends InitializerMember, FunctionAltMember {
    node: ModuleNode.FunctionExpressionNode;
    kind: FunctionExpressionKind;
}

//

export interface KnownMember extends BaseMember {
    node: ModuleNode.KnownNode;
}

export interface ESMLikeMember extends BaseMember, KnownMember {
    node: ModuleNode.ESMNode;
    kind: ImportKind | ExportKind | ExportDefaultKind;
}

export interface DefinitionLikeMember extends BaseMember, KnownMember {
    node: ModuleNode.DefinitionLikeNode;
    kind: TypeKind | InterfaceKind | VariableKind | FunctionKind;
    nameNode?: BindingName | null;
}

export interface SchemaLikeMember extends BaseMember, KnownMember, DefinitionLikeMember {
    node: ModuleNode.SchemaNode;
    kind: TypeKind | InterfaceKind;
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
    kind: ArrowFunctionKind | FunctionExpressionKind;
}

//

export type FunctionalMember =
    | FunctionMember
    | VariableFunctionMember;