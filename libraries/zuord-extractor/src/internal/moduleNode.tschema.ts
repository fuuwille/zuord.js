import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment, ArrowFunction, FunctionExpression, SyntaxKind } from "ts-morph";
import { ValueSyntaxKind, ValueSyntaxNode } from "./~valueSyntax";

export type ImportNode = ImportDeclaration;

export type ExportNode = ExportDeclaration;

export type ExportDefaultNode = ExportAssignment;

export type TypeNode = TypeAliasDeclaration;

export type InterfaceNode = InterfaceDeclaration;

export type EnumNode = EnumDeclaration;

export type VariableNode = VariableStatement;

export type FunctionNode = FunctionDeclaration;

export type ValueNode = ValueSyntaxNode;

export type ArrowFunctionNode = ArrowFunction;

export type FunctionExpressionNode = FunctionExpression;

//

export type KnownLikeNode =
    | ESMLikeNode
    | SchemaLikeNode
    | VariantLikeNode
    | InitializerLikeNode;

export type ESMLikeNode = 
    | ImportNode
    | ExportNode
    | ExportDefaultNode;

export type ExportLikeNode = 
    | ExportNode
    | ExportDefaultNode;

export type DefinitionLikeNode =
    | SchemaLikeNode
    | VariantLikeNode;

export type SchemaLikeNode =
    | TypeNode
    | InterfaceNode

export type VariantLikeNode =
    | VariableNode
    | FunctionNode;

export type InitializerLikeNode = 
    | ValueNode
    | ArrowFunctionNode
    | FunctionExpressionNode;

export type FunctionLikeNode =
    | FunctionNode
    | FunctionAltNode;

export type FunctionAltNode = 
    | ArrowFunctionNode
    | FunctionExpressionNode;

//

export type DiscardedNode =
    | DiscardedSchemaNode
    | DiscardedVariantNode;

export type DiscardedSchemaNode = 
    | VariantLikeNode;

export type DiscardedVariantNode =
    | SchemaLikeNode;


//


export type ImportKind = SyntaxKind.ImportDeclaration;

export type ExportKind = SyntaxKind.ExportDeclaration;

export type ExportDefaultKind = SyntaxKind.ExportAssignment;

export type TypeKind = SyntaxKind.TypeAliasDeclaration;

export type InterfaceKind = SyntaxKind.InterfaceDeclaration;

export type EnumKind = SyntaxKind.EnumDeclaration;

export type VariableKind = SyntaxKind.VariableStatement;

export type FunctionKind = SyntaxKind.FunctionDeclaration;

export type ArrowFunctionKind = SyntaxKind.ArrowFunction;

export type FunctionExpressionKind = SyntaxKind.FunctionExpression;

//

export type ValueKind = ValueSyntaxKind;