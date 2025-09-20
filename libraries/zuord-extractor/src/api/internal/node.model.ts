import { FunctionDeclaration, VariableDeclaration, InterfaceDeclaration, TypeAliasDeclaration, EnumDeclaration } from "ts-morph";

export type ModelNode =
    | TypeNode
    | InterfaceNode
    | EnumNode;

export type TypeNode = TypeAliasDeclaration;

export type InterfaceNode = InterfaceDeclaration;

export type EnumNode = EnumDeclaration;

export type VariantNode =
    | FunctionNode
    | VariableNode;

export type FunctionNode = FunctionDeclaration;

export type VariableNode = VariableDeclaration;