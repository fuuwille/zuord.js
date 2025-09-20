import { FunctionDeclaration, VariableDeclaration, InterfaceDeclaration, TypeAliasDeclaration, EnumDeclaration } from "ts-morph";

export type ModelNode =
    | ModelTypeNode
    | ModelInterfaceNode;

export type ModelTypeNode = TypeAliasDeclaration;

export type ModelInterfaceNode = InterfaceDeclaration;

export type ModelEnumNode = EnumDeclaration;

export type VariantNode =
    | VariantFunctionNode
    | VariantVariableNode;

export type VariantFunctionNode = FunctionDeclaration;

export type VariantVariableNode = VariableDeclaration;