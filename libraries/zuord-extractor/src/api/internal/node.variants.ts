import { Node as TSNode, SyntaxKind } from "ts-morph";
import { Node, ModelNode, TypeNode, InterfaceNode, VariantNode, FunctionNode, VariableNode, EnumNode } from "./node.model";

export const isNode = (node: TSNode): node is Node => {
    return isModelNode(node) || isVariantNode(node);
}

export const isTypeNode = (node: TSNode): node is TypeNode => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isInterfaceNode = (node: TSNode): node is InterfaceNode => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isEnumNode = (node: TSNode): node is EnumNode => {
    return node.getKind() === SyntaxKind.EnumDeclaration;
}

export const isModelNode = (node: TSNode): node is ModelNode => {
    return isTypeNode(node) || isInterfaceNode(node);
}

export const isFunctionNode = (node: TSNode): node is FunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isVariableNode = (node: TSNode): node is VariableNode => {
    return node.getKind() === SyntaxKind.VariableDeclaration;
}

export const isVariantNode = (node: TSNode): node is VariantNode => {
    return isFunctionNode(node) || isVariableNode(node);
}