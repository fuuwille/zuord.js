import { BindingName, TypeNode, Node } from "ts-morph";
import { ModuleNode } from "./moduleNode";
import { ModuleMemberKind } from "./moduleMember";

export interface Base {
    node: Node;
    kind: MemberKind;
}

export interface Unknown extends ZSchema.Base {
    kind: ModuleMemberKind.Unknown;
}

export interface Import extends ZSchema.Base, ZSchema.KnownLike, ZSchema.ESMLike {
    node: ModuleNode.Import;
    kind: ModuleMemberKind.Import;
}

export interface Export extends ZSchema.Base, ZSchema.KnownLike, ZSchema.ESMLike {
    node: ModuleNode.Export;
    kind: ModuleMemberKind.Export;
}

export interface ExportDefault extends ZSchema.Base, ZSchema.KnownLike, ZSchema.ESMLike {
    node: ModuleNode.ExportDefault;
    kind: ModuleMemberKind.ExportDefault;
}

export interface Type extends ZSchema.Base, ZSchema.KnownLike, ZSchema.SchemaLike {
    node: ModuleNode.Type;
    kind: ModuleMemberKind.Type;
}

export interface Interface extends ZSchema.Base, ZSchema.KnownLike, ZSchema.SchemaLike {
    node: ModuleNode.Interface;
    kind: ModuleMemberKind.Interface;
}

export interface Variable extends ZSchema.Base, ZSchema.KnownLike, ZSchema.VariantLike {
    node: ModuleNode.Variable;
    kind: ModuleMemberKind.Variable;
    initializer?: InitializerLike;
}

export interface Function extends ZSchema.Base, ZSchema.KnownLike, ZSchema.VariantLike, ZSchema.FunctionLike {
    node: ModuleNode.Function;
    kind: ModuleMemberKind.Function;
}

export interface Value extends ZSchema.Base, ZSchema.KnownLike, ZSchema.InitializerLike {
    node: ModuleNode.Value;
    kind: ModuleMemberKind.Value;
}

export interface ArrowFunction extends ZSchema.Base, ZSchema.KnownLike, ZSchema.InitializerLike, ZSchema.FunctionAlt {
    node: ModuleNode.ArrowFunction;
    kind: ModuleMemberKind.ArrowFunction;
}

export interface FunctionExpression extends ZSchema.Base, ZSchema.KnownLike, ZSchema.InitializerLike, ZSchema.FunctionAlt {
    node: ModuleNode.FunctionExpression;
    kind: ModuleMemberKind.FunctionExpression;
}

//

export interface KnownLike extends ZSchema.Base {
    node: ModuleNode.KnownLike;
}

export interface ESMLike extends ZSchema.Base, ZSchema.KnownLike {
    node: ModuleNode.ESMLike;
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.ExportDefault;
}

export interface DefinitionLike extends ZSchema.Base, ZSchema.KnownLike {
    node: ModuleNode.DefinitionLike;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Variable | ModuleMemberKind.Function;
    nameNode?: BindingName | null;
}

export interface SchemaLike extends ZSchema.Base, ZSchema.KnownLike, ZSchema.DefinitionLike {
    node: ModuleNode.SchemaLike;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface;
}

export interface VariantLike extends ZSchema.Base, ZSchema.KnownLike, ZSchema.DefinitionLike {
    node: ModuleNode.VariantLike;
    kind: ModuleMemberKind.Variable | ModuleMemberKind.Function;
}

export interface InitializerLike extends ZSchema.Base, ZSchema.KnownLike {
    node: ModuleNode.InitializerLike;
    kind: ModuleMemberKind.Value | ModuleMemberKind.ArrowFunction | ModuleMemberKind.FunctionExpression;
}

export interface ValueVariable extends ZSchema.Variable {
    initializer?: Value;
    declaredTypeNode?: TypeNode;
}

export interface FunctionalVariable extends ZSchema.Variable {
    initializer?: FunctionAlt;
}

export interface FunctionLike extends ZSchema.Base {
    node: ModuleNode.FunctionLike;
    returnTypeNode?: TypeNode;
    paramTypeNode?: TypeNode;
}

export interface FunctionAlt extends ZSchema.FunctionLike {
    node: ModuleNode.FunctionAlt;
    kind: ModuleMemberKind.ArrowFunction | ModuleMemberKind.FunctionExpression;
}

//

export type FunctionalVariant =
    | ZSchema.Function
    | ZSchema.FunctionalVariable;

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