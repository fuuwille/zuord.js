import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment, ArrowFunction as $ArrowFunction, FunctionExpression as $FunctionExpression } from "ts-morph";
import { ValueSyntaxNode } from "./~valueSyntax";

export type Import = ImportDeclaration;

export type Export = ExportDeclaration;

export type ExportDefault = ExportAssignment;

export type Type = TypeAliasDeclaration;

export type Interface = InterfaceDeclaration;

export type Enum = EnumDeclaration;

export type Variable = VariableStatement;

export type Function = FunctionDeclaration;

export type Value = ValueSyntaxNode;

export type ArrowFunction = $ArrowFunction;

export type FunctionExpression = $FunctionExpression;

//

export type KnownLike =
    | ESMLike
    | SchemaLike
    | VariantLike
    | InitializerLike;

export type ESMLike = 
    | Import
    | Export
    | ExportDefault;

export type ExportLike = 
    | Export
    | ExportDefault;

export type DefinitionLike =
    | SchemaLike
    | VariantLike;

export type SchemaLike =
    | Type
    | Interface

export type VariantLike =
    | Variable
    | Function;

export type InitializerLike = 
    | Value
    | ArrowFunction
    | FunctionExpression;

export type FunctionLike =
    | Function
    | FunctionAlt;

export type FunctionAlt = 
    | ArrowFunction
    | FunctionExpression;

//

export type Discarded =
    | DiscardedSchema
    | DiscardedVariant;

export type DiscardedSchema = 
    | VariantLike;

export type DiscardedVariant =
    | SchemaLike;