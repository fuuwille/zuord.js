import { Node, SyntaxKind } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleNode } from "./moduleNode";

// ESM Nodes
export const isESMNode = (node: Node): node is ModuleNode.ESMNode => {
    return isImportNode(node) || isExportNode(node) || isExportDefaultNode(node);
}

export const isImportNode = (node: Node): node is ModuleNode.ImportNode => {
    return node.getKind() === SyntaxKind.ImportDeclaration;
}

export const isExportNode = (node: Node): node is ModuleNode.ExportNode => {
    return node.getKind() === SyntaxKind.ExportDeclaration;
}

export const isExportDefaultNode = (node: Node): node is ModuleNode.ExportDefaultNode => {
    return node.getKind() === SyntaxKind.ExportAssignment;
}

// Schema Nodes
export const isSchemaNode = (node: Node): node is ModuleNode.SchemaNode => {
    return isTypeNode(node) || isInterfaceNode(node) || isEnumNode(node);
}

export const isTypeNode = (node: Node): node is ModuleNode.TypeNode => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isInterfaceNode = (node: Node): node is ModuleNode.InterfaceNode => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isEnumNode = (node: Node): node is ModuleNode.EnumNode => {
    return node.getKind() === SyntaxKind.EnumDeclaration;
}

// Variant Nodes
export const isVariantNode = (node: Node): node is ModuleNode.VariantNode => {
    return isFunctionLikeNode(node) || isVariableNode(node);
}

export const isVariableNode = (node: Node): node is ModuleNode.VariableNode => {
    return node.getKind() === SyntaxKind.VariableStatement;
}

export const isFunctionNode = (node: Node): node is ModuleNode.FunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

// Initializer Nodes
export const isInitializerNode = (node: Node): node is ModuleNode.InitializerNode => {
    return isArrowFunctionNode(node) || isFunctionExpressionNode(node);
}

export const isArrowFunctionNode = (node: Node): node is ModuleNode.ArrowFunctionNode => {
    return node.getKind() === SyntaxKind.ArrowFunction;
}

export const isFunctionExpressionNode = (node: Node): node is ModuleNode.FunctionExpressionNode => {
    return node.getKind() === SyntaxKind.FunctionExpression;
}

//

export const isKnownNode = (node: Node): node is ModuleNode.KnownNode => {
    return isESMNode(node) || isSchemaNode(node) || isVariantNode(node) || isInitializerNode(node);
}

export const isExportLikeNode = (node: Node): node is ModuleNode.ExportLikeNode => {
    return isExportNode(node) || isExportDefaultNode(node);
}

export const isDefinitionLikeNode = (node: Node): node is ModuleNode.DefinitionLikeNode => {
    return isSchemaNode(node) || isVariantNode(node);
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
    return isVariantNode(node);
}

export const isDiscardedVariantNode = (node: Node): node is ModuleNode.DiscardedVariantNode => {
    return isSchemaNode(node);
}