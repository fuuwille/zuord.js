import { Node, SyntaxKind } from "ts-morph";
import { ModelNode, VariantNode, VariantFunctionNode, VariantVariableNode } from "./node.model";

export const isModelNode = (node: Node): node is ModelNode => {
    switch (node.getKind()) {
        case SyntaxKind.InterfaceDeclaration:
        case SyntaxKind.TypeAliasDeclaration:
            return true;
        default:
            return false;
    }
}

export const isVariantNode = (node: Node): node is VariantNode => {
    switch (node.getKind()) {
        case SyntaxKind.FunctionDeclaration:
        case SyntaxKind.VariableDeclaration:
            return true;
        default:
            return false;
    }
}

export const isVariantFunctionNode = (node: Node): node is VariantFunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isVariantVariableNode = (node: Node): node is VariantVariableNode => {
    return node.getKind() === SyntaxKind.VariableDeclaration;
}