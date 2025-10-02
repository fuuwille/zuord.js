import { BindingName, TypeNode, Node } from "ts-morph";
import { ModuleNode } from "./moduleNode";
import { ModuleMemberKind } from "./moduleMemberKind";

export interface BaseMember {
    node: Node;
    kind: MemberKind;
}

export interface UnknownMember extends BaseMember {
    kind: ModuleMemberKind.Unknown;
}

export interface ImportMember extends BaseMember, KnownLikeMember, ESMLikeMember {
    node: ModuleNode.Import;
    kind: ModuleMemberKind.Import;
}

export interface ExportMember extends BaseMember, KnownLikeMember, ESMLikeMember {
    node: ModuleNode.Export;
    kind: ModuleMemberKind.Export;
}

export interface ExportDefaultMember extends BaseMember, KnownLikeMember, ESMLikeMember {
    node: ModuleNode.ExportDefault;
    kind: ModuleMemberKind.ExportDefault;
}

export interface TypeMember extends BaseMember, KnownLikeMember, SchemaLikeMember {
    node: ModuleNode.Type;
    kind: ModuleMemberKind.Type;
}

export interface InterfaceMember extends BaseMember, KnownLikeMember, SchemaLikeMember {
    node: ModuleNode.Interface;
    kind: ModuleMemberKind.Interface;
}

export interface VariableMember extends BaseMember, KnownLikeMember, VariantLikeMember {
    node: ModuleNode.Variable;
    kind: ModuleMemberKind.Variable;
    initializer?: InitializerLikeMember;
}

export interface FunctionMember extends BaseMember, KnownLikeMember, VariantLikeMember, FunctionLikeMember {
    node: ModuleNode.Function;
    kind: ModuleMemberKind.Function;
}

export interface ValueMember extends BaseMember, KnownLikeMember, InitializerLikeMember {
    node: ModuleNode.Value;
    kind: ModuleMemberKind.Value;
}

export interface ArrowFunctionMember extends BaseMember, KnownLikeMember, InitializerLikeMember, FunctionAltMember {
    node: ModuleNode.ArrowFunction;
    kind: ModuleMemberKind.ArrowFunction;
}

export interface FunctionExpressionMember extends BaseMember, KnownLikeMember, InitializerLikeMember, FunctionAltMember {
    node: ModuleNode.FunctionExpression;
    kind: ModuleMemberKind.FunctionExpression;
}

//

export interface KnownLikeMember extends BaseMember {
    node: ModuleNode.KnownLike;
}

export interface ESMLikeMember extends BaseMember, KnownLikeMember {
    node: ModuleNode.ESMLike;
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.ExportDefault;
}

export interface DefinitionLikeMember extends BaseMember, KnownLikeMember {
    node: ModuleNode.DefinitionLike;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Variable | ModuleMemberKind.Function;
    nameNode?: BindingName | null;
}

export interface SchemaLikeMember extends BaseMember, KnownLikeMember, DefinitionLikeMember {
    node: ModuleNode.SchemaLike;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface;
}

export interface VariantLikeMember extends BaseMember, KnownLikeMember, DefinitionLikeMember {
    node: ModuleNode.VariantLike;
    kind: ModuleMemberKind.Variable | ModuleMemberKind.Function;
}

export interface InitializerLikeMember extends BaseMember, KnownLikeMember {
    node: ModuleNode.InitializerLike;
    kind: ModuleMemberKind.Value | ModuleMemberKind.ArrowFunction | ModuleMemberKind.FunctionExpression;
}

export interface VariableValueMember extends VariableMember {
    initializer?: ValueMember;
    declaredTypeNode?: TypeNode;
}

export interface VariableFunctionalMember extends VariableMember {
    initializer?: FunctionAltMember;
}

export interface FunctionLikeMember extends BaseMember {
    node: ModuleNode.FunctionLike;
    returnTypeNode?: TypeNode;
    paramTypeNode?: TypeNode;
}

export interface FunctionAltMember extends FunctionLikeMember {
    node: ModuleNode.FunctionAlt;
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