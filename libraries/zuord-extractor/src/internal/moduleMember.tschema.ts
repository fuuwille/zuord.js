import { BindingName, TypeNode, Node } from "ts-morph";
import { ModuleNode } from "./moduleNode";
import { ModuleMemberKind } from "./moduleMemberKind";

export interface Member {
    node: Node;
    kind: MemberKind;
}

export interface UnknownMember extends Member {
    kind: ModuleMemberKind.Unknown;
}

export interface ImportMember extends Member, KnownLikeMember, ESMLikeMember {
    node: ModuleNode.ImportNode;
    kind: ModuleMemberKind.Import;
}

export interface ExportMember extends Member, KnownLikeMember, ESMLikeMember {
    node: ModuleNode.ExportNode;
    kind: ModuleMemberKind.Export;
}

export interface ExportDefaultMember extends Member, KnownLikeMember, ESMLikeMember {
    node: ModuleNode.ExportDefaultNode;
    kind: ModuleMemberKind.ExportDefault;
}

export interface TypeMember extends Member, KnownLikeMember, SchemaLikeMember {
    node: ModuleNode.TypeNode;
    kind: ModuleMemberKind.Type;
}

export interface InterfaceMember extends Member, KnownLikeMember, SchemaLikeMember {
    node: ModuleNode.InterfaceNode;
    kind: ModuleMemberKind.Interface;
}

export interface VariableMember extends Member, KnownLikeMember, VariantLikeMember {
    node: ModuleNode.VariableNode;
    kind: ModuleMemberKind.Variable;
    initializer?: InitializerLikeMember;
}

export interface FunctionMember extends Member, KnownLikeMember, VariantLikeMember, FunctionLikeMember {
    node: ModuleNode.FunctionNode;
    kind: ModuleMemberKind.Function;
}

export interface ValueMember extends Member, KnownLikeMember, InitializerLikeMember {
    node: ModuleNode.ValueNode;
    kind: ModuleMemberKind.Value;
}

export interface ArrowFunctionMember extends Member, KnownLikeMember, InitializerLikeMember, FunctionAltMember {
    node: ModuleNode.ArrowFunctionNode;
    kind: ModuleMemberKind.ArrowFunction;
}

export interface FunctionExpressionMember extends Member, KnownLikeMember, InitializerLikeMember, FunctionAltMember {
    node: ModuleNode.FunctionExpressionNode;
    kind: ModuleMemberKind.FunctionExpression;
}

//

export interface KnownLikeMember extends Member {
    node: ModuleNode.KnownLikeNode;
}

export interface ESMLikeMember extends Member, KnownLikeMember {
    node: ModuleNode.ESMLikeNode;
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.ExportDefault;
}

export interface DefinitionLikeMember extends Member, KnownLikeMember {
    node: ModuleNode.DefinitionLikeNode;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Variable | ModuleMemberKind.Function;
    nameNode?: BindingName | null;
}

export interface SchemaLikeMember extends Member, KnownLikeMember, DefinitionLikeMember {
    node: ModuleNode.SchemaLikeNode;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface;
}

export interface VariantLikeMember extends Member, KnownLikeMember, DefinitionLikeMember {
    node: ModuleNode.VariantLikeNode;
    kind: ModuleMemberKind.Variable | ModuleMemberKind.Function;
}

export interface InitializerLikeMember extends Member, KnownLikeMember {
    node: ModuleNode.InitializerLikeNode;
    kind: ModuleMemberKind.Value | ModuleMemberKind.ArrowFunction | ModuleMemberKind.FunctionExpression;
}

export interface VariableValueMember extends VariableMember {
    initializer?: ValueMember;
    declaredTypeNode?: TypeNode;
}

export interface VariableFunctionalMember extends VariableMember {
    initializer?: FunctionAltMember;
}

export interface FunctionLikeMember extends Member {
    node: ModuleNode.FunctionLikeNode;
    returnTypeNode?: TypeNode;
    paramTypeNode?: TypeNode;
}

export interface FunctionAltMember extends FunctionLikeMember {
    node: ModuleNode.FunctionAltNode;
    kind: ModuleMemberKind.ArrowFunction | ModuleMemberKind.FunctionExpression;
}

//

export type FunctionalMember =
    | FunctionMember
    | VariableFunctionalMember;

//

export type MemberKind =
    | ModuleMemberKind.Unknown
    | ModuleMemberKind.Import
    | ModuleMemberKind.Export
    | ModuleMemberKind.ExportDefault
    | ModuleMemberKind.Type
    | ModuleMemberKind.Interface
    | ModuleMemberKind.Variable
    | ModuleMemberKind.Function
    | ModuleMemberKind.Value
    | ModuleMemberKind.ArrowFunction
    | ModuleMemberKind.FunctionExpression;