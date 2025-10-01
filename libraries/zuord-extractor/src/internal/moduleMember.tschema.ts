import { BindingName, TypeNode, Node } from "ts-morph";
import { ModuleNode } from "./moduleNode";

export interface Member {
    node: Node;
    kind: MemberKind;
}

export interface UnknownMember extends Member {
    kind: UnknownKind;
}

export interface ImportMember extends Member, KnownLikeMember, ESMLikeMember {
    node: ModuleNode.ImportNode;
    kind: ImportKind;
}

export interface ExportMember extends Member, KnownLikeMember, ESMLikeMember {
    node: ModuleNode.ExportNode;
    kind: ExportKind;
}

export interface ExportDefaultMember extends Member, KnownLikeMember, ESMLikeMember {
    node: ModuleNode.ExportDefaultNode;
    kind: ExportDefaultKind;
}

export interface TypeMember extends Member, KnownLikeMember, SchemaLikeMember {
    node: ModuleNode.TypeNode;
    kind: TypeKind;
}

export interface InterfaceMember extends Member, KnownLikeMember, SchemaLikeMember {
    node: ModuleNode.InterfaceNode;
    kind: InterfaceKind;
}

export interface VariableMember extends Member, KnownLikeMember, VariantLikeMember {
    node: ModuleNode.VariableNode;
    kind: VariableKind;
    initializer?: InitializerLikeMember;
}

export interface FunctionMember extends Member, KnownLikeMember, VariantLikeMember, FunctionLikeMember {
    node: ModuleNode.FunctionNode;
    kind: FunctionKind;
}

export interface ValueMember extends Member, KnownLikeMember, InitializerLikeMember {
    node: ModuleNode.ValueNode;
    kind: ValueKind;
    declaredTypeNode?: TypeNode;
}

export interface ArrowFunctionMember extends Member, KnownLikeMember, InitializerLikeMember, FunctionAltMember {
    node: ModuleNode.ArrowFunctionNode;
    kind: ArrowFunctionKind;
}

export interface FunctionExpressionMember extends Member, KnownLikeMember, InitializerLikeMember, FunctionAltMember {
    node: ModuleNode.FunctionExpressionNode;
    kind: FunctionExpressionKind;
}

//

export interface KnownLikeMember extends Member {
    node: ModuleNode.KnownLikeNode;
}

export interface ESMLikeMember extends Member, KnownLikeMember {
    node: ModuleNode.ESMLikeNode;
    kind: ImportKind | ExportKind | ExportDefaultKind;
}

export interface DefinitionLikeMember extends Member, KnownLikeMember {
    node: ModuleNode.DefinitionLikeNode;
    kind: TypeKind | InterfaceKind | VariableKind | FunctionKind;
    nameNode?: BindingName | null;
}

export interface SchemaLikeMember extends Member, KnownLikeMember, DefinitionLikeMember {
    node: ModuleNode.SchemaLikeNode;
    kind: TypeKind | InterfaceKind;
}

export interface VariantLikeMember extends Member, KnownLikeMember, DefinitionLikeMember {
    node: ModuleNode.VariantLikeNode;
    kind: VariableKind | FunctionKind;
}

export interface InitializerLikeMember extends Member, KnownLikeMember {
    node: ModuleNode.InitializerLikeNode;
    kind: ValueKind | ArrowFunctionKind | FunctionExpressionKind;
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