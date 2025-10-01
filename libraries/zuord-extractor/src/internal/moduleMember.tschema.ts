import { BindingName, TypeNode, Node } from "ts-morph";
import { ModuleNode } from "./moduleNode";

export interface Member {
    node: Node;
    kind: MemberKind;
}

export interface UnknownMember extends Member {
    kind: UnknownKind;
}

export interface ImportMember extends Member, ESMLikeMember {
    node: ModuleNode.ImportNode;
    kind: ImportKind;
}

export interface ExportMember extends Member, ESMLikeMember {
    node: ModuleNode.ExportNode;
    kind: ExportKind;
}

export interface ExportDefaultMember extends Member, ESMLikeMember {
    node: ModuleNode.ExportDefaultNode;
    kind: ExportDefaultKind;
}

export interface TypeMember extends Member, SchemaLikeMember {
    node: ModuleNode.TypeNode;
    kind: TypeKind;
}

export interface InterfaceMember extends Member, SchemaLikeMember {
    node: ModuleNode.InterfaceNode;
    kind: InterfaceKind;
}

export interface VariableMember extends Member, VariantLikeMember {
    node: ModuleNode.VariableNode;
    kind: VariableKind;
    initializer?: InitializerMember;
}

export interface FunctionMember extends Member, VariantLikeMember, FunctionLikeMember {
    node: ModuleNode.FunctionNode;
    kind: FunctionKind;
}

// Initializer Members
export interface InitializerMember extends Member, KnownLikeMember {
    node: ModuleNode.InitializerNode;
    kind: ValueKind | ArrowFunctionKind | FunctionExpressionKind;
}

export interface ArrowFunctionMember extends Member, InitializerMember, FunctionAltMember {
    node: ModuleNode.ArrowFunctionNode;
    kind: ArrowFunctionKind;
}

export interface FunctionExpressionMember extends Member, InitializerMember, FunctionAltMember {
    node: ModuleNode.FunctionExpressionNode;
    kind: FunctionExpressionKind;
}

//

export interface KnownLikeMember extends Member {
    node: ModuleNode.KnownNode;
}

export interface ESMLikeMember extends Member, KnownLikeMember {
    node: ModuleNode.ESMNode;
    kind: ImportKind | ExportKind | ExportDefaultKind;
}

export interface DefinitionLikeMember extends Member, KnownLikeMember {
    node: ModuleNode.DefinitionLikeNode;
    kind: TypeKind | InterfaceKind | VariableKind | FunctionKind;
    nameNode?: BindingName | null;
}

export interface SchemaLikeMember extends Member, KnownLikeMember, DefinitionLikeMember {
    node: ModuleNode.SchemaNode;
    kind: TypeKind | InterfaceKind;
}

export interface VariantLikeMember extends Member, KnownLikeMember, DefinitionLikeMember {
    node: ModuleNode.VariantNode;
    kind: VariableKind | FunctionKind;
}

export interface VariableFunctionMember extends VariableMember {
    initializer?: FunctionAltMember;
}

export interface FunctionLikeMember extends Member {
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

//

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