import { BindingName, TypeNode, Node } from "ts-morph";
import * as ModuleNode from "./moduleNode.zs";
import * as ModuleMemberKind from "./moduleMemberKind.zs";

export interface Base {
    node: Node;
    kind: MemberKind;
}

export interface Unknown extends Base {
    kind: ModuleMemberKind.Unknown;
}

export interface Import extends Base, KnownLike, ESMLike {
    node: ModuleNode.Import;
    kind: ModuleMemberKind.Import;
}

export interface Export extends Base, KnownLike, ESMLike {
    node: ModuleNode.Export;
    kind: ModuleMemberKind.Export;
}

export interface ExportDefault extends Base, KnownLike, ESMLike {
    node: ModuleNode.ExportDefault;
    kind: ModuleMemberKind.ExportDefault;
}

export interface Type extends Base, KnownLike, SchemaLike {
    node: ModuleNode.Type;
    kind: ModuleMemberKind.Type;
}

export interface Interface extends Base, KnownLike, SchemaLike {
    node: ModuleNode.Interface;
    kind: ModuleMemberKind.Interface;
}

export interface Variable extends Base, KnownLike, VariantLike {
    node: ModuleNode.Variable;
    kind: ModuleMemberKind.Variable;
    initializer?: InitializerLike;
}

export interface Function extends Base, KnownLike, VariantLike, FunctionLike {
    node: ModuleNode.Function;
    kind: ModuleMemberKind.Function;
}

export interface Value extends Base, KnownLike, InitializerLike {
    node: ModuleNode.Value;
    kind: ModuleMemberKind.Value;
}

export interface ArrowFunction extends Base, KnownLike, InitializerLike, FunctionAlt {
    node: ModuleNode.ArrowFunction;
    kind: ModuleMemberKind.ArrowFunction;
}

export interface FunctionExpression extends Base, KnownLike, InitializerLike, FunctionAlt {
    node: ModuleNode.FunctionExpression;
    kind: ModuleMemberKind.FunctionExpression;
}

//

export interface KnownLike extends Base {
    node: ModuleNode.KnownLike;
}

export interface ESMLike extends Base, KnownLike {
    node: ModuleNode.ESMLike;
    kind: ModuleMemberKind.Import | ModuleMemberKind.Export | ModuleMemberKind.ExportDefault;
}

export interface DefinitionLike extends Base, KnownLike {
    node: ModuleNode.DefinitionLike;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface | ModuleMemberKind.Variable | ModuleMemberKind.Function;
    nameNode?: BindingName | null;
}

export interface SchemaLike extends Base, KnownLike, DefinitionLike {
    node: ModuleNode.SchemaLike;
    kind: ModuleMemberKind.Type | ModuleMemberKind.Interface;
}

export interface VariantLike extends Base, KnownLike, DefinitionLike {
    node: ModuleNode.VariantLike;
    kind: ModuleMemberKind.Variable | ModuleMemberKind.Function;
}

export interface InitializerLike extends Base, KnownLike {
    node: ModuleNode.InitializerLike;
    kind: ModuleMemberKind.Value | ModuleMemberKind.ArrowFunction | ModuleMemberKind.FunctionExpression;
}

export interface ValueVariable extends Variable {
    initializer?: Value;
    declaredTypeNode?: TypeNode;
}

export interface FunctionalVariable extends Variable {
    initializer?: FunctionAlt;
}

export interface FunctionLike extends Base {
    node: ModuleNode.FunctionLike;
    returnTypeNode?: TypeNode;
    paramTypeNode?: TypeNode;
}

export interface FunctionAlt extends FunctionLike {
    node: ModuleNode.FunctionAlt;
    kind: ModuleMemberKind.ArrowFunction | ModuleMemberKind.FunctionExpression;
}

//

export type FunctionalVariant =
    | Function
    | FunctionalVariable;

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