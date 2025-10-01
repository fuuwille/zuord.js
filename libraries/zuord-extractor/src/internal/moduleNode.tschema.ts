import { TypeAliasDeclaration, InterfaceDeclaration, EnumDeclaration, FunctionDeclaration, VariableStatement, ImportDeclaration, ExportDeclaration, ExportAssignment, Node, ArrowFunction, FunctionExpression, ClassDeclaration } from "ts-morph";

export type ESMNode = 
    | ImportNode
    | ExportNode
    | ExportDefaultNode;

export type ImportNode = ImportDeclaration;

export type ExportNode = ExportDeclaration;

export type ExportDefaultNode = ExportAssignment;

export type SchemaNode =
    | TypeNode
    | InterfaceNode
    | EnumNode;

export type TypeNode = TypeAliasDeclaration;

export type InterfaceNode = InterfaceDeclaration;

export type EnumNode = EnumDeclaration;

export type VariantNode =
    | FunctionNode
    | VariableNode;

export type VariableNode = VariableStatement;

export type FunctionNode = FunctionDeclaration;

export type InitializerNode = 
    | ArrowFunctionNode
    | FunctionExpressionNode;

export type ArrowFunctionNode = ArrowFunction;

export type FunctionExpressionNode = FunctionExpression;

//

export type KnownNode =
    | ESMNode
    | SchemaNode
    | VariantNode
    | InitializerNode;

export type ExportLikeNode = 
    | ExportNode
    | ExportDefaultNode;

export type DefinitionLikeNode =
    | SchemaNode
    | VariantNode;

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
    | VariantNode;

export type DiscardedVariantNode =
    | SchemaNode;