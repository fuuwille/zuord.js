import { SyntaxKind } from "ts-morph";
import { ValueSyntaxKind } from "./~valueSyntax";

//

export type Import = SyntaxKind.ImportDeclaration;

export type Export = SyntaxKind.ExportDeclaration;

export type ExportDefault = SyntaxKind.ExportAssignment;

export type Type = SyntaxKind.TypeAliasDeclaration;

export type Interface = SyntaxKind.InterfaceDeclaration;

export type Enum = SyntaxKind.EnumDeclaration;

export type Variable = SyntaxKind.VariableStatement;

export type Function = SyntaxKind.FunctionDeclaration;

export type ArrowFunction = SyntaxKind.ArrowFunction;

export type FunctionExpression = SyntaxKind.FunctionExpression;

//

export type Value = ValueSyntaxKind;