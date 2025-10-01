import { Node, SyntaxKind } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleNode } from "./moduleNode";

export const isImportNode = (node: Node): node is ModuleNode.ImportNode => {
    return node.getKind() === SyntaxKind.ImportDeclaration;
}

export const isExportNode = (node: Node): node is ModuleNode.ExportNode => {
    return node.getKind() === SyntaxKind.ExportDeclaration;
}

export const isExportDefaultNode = (node: Node): node is ModuleNode.ExportDefaultNode => {
    return node.getKind() === SyntaxKind.ExportAssignment;
}

export const isTypeNode = (node: Node): node is ModuleNode.TypeNode => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isInterfaceNode = (node: Node): node is ModuleNode.InterfaceNode => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isVariableNode = (node: Node): node is ModuleNode.VariableNode => {
    return node.getKind() === SyntaxKind.VariableStatement;
}

export const isFunctionNode = (node: Node): node is ModuleNode.FunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isArrowFunctionNode = (node: Node): node is ModuleNode.ArrowFunctionNode => {
    return node.getKind() === SyntaxKind.ArrowFunction;
}

export const isFunctionExpressionNode = (node: Node): node is ModuleNode.FunctionExpressionNode => {
    return node.getKind() === SyntaxKind.FunctionExpression;
}

//

export const isKnownLikeNode = (node: Node): node is ModuleNode.KnownLikeNode => {
    return isESMLikeNode(node) || isSchemaLikeNode(node) || isVariantLikeNode(node) || isInitializerLikeNode(node);
}

export const isESMLikeNode = (node: Node): node is ModuleNode.ESMLikeNode => {
    return isImportNode(node) || isExportNode(node) || isExportDefaultNode(node);
}

export const isExportLikeNode = (node: Node): node is ModuleNode.ExportLikeNode => {
    return isExportNode(node) || isExportDefaultNode(node);
}

export const isDefinitionLikeNode = (node: Node): node is ModuleNode.DefinitionLikeNode => {
    return isSchemaLikeNode(node) || isVariantLikeNode(node);
}

export const isSchemaLikeNode = (node: Node): node is ModuleNode.SchemaLikeNode => {
    return isTypeNode(node) || isInterfaceNode(node);
}

export const isVariantLikeNode = (node: Node): node is ModuleNode.VariantLikeNode => {
    return isFunctionLikeNode(node) || isVariableNode(node);
}

export const isInitializerLikeNode = (node: Node): node is ModuleNode.InitializerLikeNode => {
    return isArrowFunctionNode(node) || isFunctionExpressionNode(node);
}

export const isFunctionLikeNode = (node: Node): node is ModuleNode.FunctionLikeNode => {
    return isFunctionNode(node) || isFunctionAltNode(node);
}

export const isFunctionAltNode = (node: Node): node is ModuleNode.FunctionAltNode => {
    return isArrowFunctionNode(node) || isFunctionExpressionNode(node);
}

//

export const isDiscardedNode = (node: Node, mode : ModuleMode): node is ModuleNode.DiscardedNode => {
    switch(mode) {
        case ModuleMode.Schema:
            return isDiscardedSchemaNode(node);
        case ModuleMode.Variants:
            return isDiscardedVariantNode(node);
        default:
            return false;
    }
}

export const isDiscardedSchemaNode = (node: Node): node is ModuleNode.DiscardedSchemaNode => {
    return isVariantLikeNode(node);
}

export const isDiscardedVariantNode = (node: Node): node is ModuleNode.DiscardedVariantNode => {
    return isSchemaLikeNode(node);
}