import { Node, SyntaxKind } from "ts-morph";
import { ModelNode, TypeNode, InterfaceNode, VariantNode, FunctionNode, VariableNode, EnumNode } from "./node.model";

export const isTypeNode = (node: Node): node is TypeNode => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isInterfaceNode = (node: Node): node is InterfaceNode => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isEnumNode = (node: Node): node is EnumNode => {
    return node.getKind() === SyntaxKind.EnumDeclaration;
}

export const isModelNode = (node: Node): node is ModelNode => {
    return isTypeNode(node) || isInterfaceNode(node);
}

export const isFunctionNode = (node: Node): node is FunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isVariableNode = (node: Node): node is VariableNode => {
    return node.getKind() === SyntaxKind.VariableDeclaration;
}

export const isVariantNode = (node: Node): node is VariantNode => {
    return isFunctionNode(node) || isVariableNode(node);
}