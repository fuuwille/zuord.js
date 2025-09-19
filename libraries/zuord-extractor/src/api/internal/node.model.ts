import { FunctionDeclaration, VariableDeclaration, InterfaceDeclaration, TypeAliasDeclaration } from "ts-morph";

export type ModelNode =
    | ModelTypeNode
    | ModelInterfaceNode;

export type ModelTypeNode = TypeAliasDeclaration;

export type ModelInterfaceNode = InterfaceDeclaration;

export type VariantNode =
    | VariantFunctionNode
    | VariantVariableNode;

export type VariantFunctionNode = FunctionDeclaration;

export type VariantVariableNode = VariableDeclaration;