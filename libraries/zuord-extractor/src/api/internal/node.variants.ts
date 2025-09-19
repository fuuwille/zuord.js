import { Node, SyntaxKind } from "ts-morph";
import { VariantNode, ModelNode } from "./node.model";

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
        case SyntaxKind.ArrowFunction:
        case SyntaxKind.FunctionExpression:
        case SyntaxKind.VariableDeclaration:
        case SyntaxKind.ExportAssignment:
        case SyntaxKind.EnumDeclaration:
        case SyntaxKind.ObjectLiteralExpression:
            return true;
        default:
            return false;
    }
}