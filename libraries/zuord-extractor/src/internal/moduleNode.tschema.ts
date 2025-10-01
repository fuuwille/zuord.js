import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment, Node, ArrowFunction, FunctionExpression, ClassDeclaration } from "ts-morph";

export type ImportNode = ImportDeclaration;

export type ExportNode = ExportDeclaration;

export type ExportDefaultNode = ExportAssignment;

export type TypeNode = TypeAliasDeclaration;

export type InterfaceNode = InterfaceDeclaration;

export type EnumNode = EnumDeclaration;

export type VariableNode = VariableStatement;

export type FunctionNode = FunctionDeclaration;

export type ArrowFunctionNode = ArrowFunction;

export type FunctionExpressionNode = FunctionExpression;

//

export type KnownNode =
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
    | EnumNode;

export type VariantLikeNode =
    | FunctionNode
    | VariableNode;

export type InitializerLikeNode = 
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