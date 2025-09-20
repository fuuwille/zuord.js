import { Node, SyntaxKind } from "ts-morph";
import { ModelNode, ModelTypeNode, ModelInterfaceNode, VariantNode, VariantFunctionNode, VariantVariableNode, ModelEnumNode } from "./node.model";

export const isModelNode = (node: Node): node is ModelNode => {
    return isModelTypeNode(node) || isModelInterfaceNode(node);
}

export const isModelTypeNode = (node: Node): node is ModelTypeNode => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isModelInterfaceNode = (node: Node): node is ModelInterfaceNode => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isModelEnumNode = (node: Node): node is ModelEnumNode => {
    return node.getKind() === SyntaxKind.EnumDeclaration;
}

export const isVariantNode = (node: Node): node is VariantNode => {
    return isVariantFunctionNode(node) || isVariantVariableNode(node);
}

export const isVariantFunctionNode = (node: Node): node is VariantFunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isVariantVariableNode = (node: Node): node is VariantVariableNode => {
    return node.getKind() === SyntaxKind.VariableDeclaration;
}