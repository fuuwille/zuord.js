import { Node, SyntaxKind } from "ts-morph";
import { RuntimeNode } from "./node.types";

export const isRuntimeNode = (node: Node): node is RuntimeNode => {
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