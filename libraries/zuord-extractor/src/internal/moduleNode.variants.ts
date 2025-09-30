import { Node, SyntaxKind } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleKnownNode, ModuleSchemaNode, ModuleTypeNode, ModuleInterfaceNode, ModuleEnumNode, ModuleVariantNode, ModuleFunctionNode, ModuleVariableNode, ModuleDiscardedSchemaNode, ModuleDiscardedVariantNode, ModuleImportNode, ModuleExportNode, ModuleExportDefaultNode, ModuleESMNode, ModuleFunctionAltNode, ModuleArrowFunctionNode, ModuleFunctionExpressionNode, ModuleFunctionLikeNode, ModuleDiscardedNode, ModuleExportLikeNode, ModuleDefinitionLikeNode, ModuleInitializerNode, ModuleNode } from "./moduleNode.tschema";

// ESM Nodes
export const isModuleESMNode = (node: ModuleNode): node is ModuleESMNode => {
    return isModuleImportNode(node) || isModuleExportNode(node) || isModuleExportDefaultNode(node);
}

export const isModuleImportNode = (node: ModuleNode): node is ModuleImportNode => {
    return node.getKind() === SyntaxKind.ImportDeclaration;
}

export const isModuleExportNode = (node: ModuleNode): node is ModuleExportNode => {
    return node.getKind() === SyntaxKind.ExportDeclaration;
}

export const isModuleExportDefaultNode = (node: ModuleNode): node is ModuleExportDefaultNode => {
    return node.getKind() === SyntaxKind.ExportAssignment;
}

// Schema Nodes
export const isModuleSchemaNode = (node: ModuleNode): node is ModuleSchemaNode => {
    return isModuleTypeNode(node) || isModuleInterfaceNode(node) || isModuleEnumNode(node);
}

export const isModuleTypeNode = (node: ModuleNode): node is ModuleTypeNode => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isModuleInterfaceNode = (node: ModuleNode): node is ModuleInterfaceNode => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isModuleEnumNode = (node: ModuleNode): node is ModuleEnumNode => {
    return node.getKind() === SyntaxKind.EnumDeclaration;
}

// Variant Nodes
export const isModuleVariantNode = (node: ModuleNode): node is ModuleVariantNode => {
    return isModuleFunctionLikeNode(node) || isModuleVariableNode(node);
}

export const isModuleVariableNode = (node: ModuleNode): node is ModuleVariableNode => {
    return node.getKind() === SyntaxKind.VariableStatement;
}

export const isModuleFunctionNode = (node: ModuleNode): node is ModuleFunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

// Initializer Nodes
export const isModuleInitializerNode = (node: ModuleNode): node is ModuleInitializerNode => {
    return isModuleArrowFunctionNode(node) || isModuleFunctionExpressionNode(node);
}

export const isModuleArrowFunctionNode = (node: ModuleNode): node is ModuleArrowFunctionNode => {
    return node.getKind() === SyntaxKind.ArrowFunction;
}

export const isModuleFunctionExpressionNode = (node: ModuleNode): node is ModuleFunctionExpressionNode => {
    return node.getKind() === SyntaxKind.FunctionExpression;
}

//

export const isModuleKnownNode = (node: ModuleNode): node is ModuleKnownNode => {
    return isModuleESMNode(node) || isModuleSchemaNode(node) || isModuleVariantNode(node) || isModuleInitializerNode(node);
}

export const isModuleExportLikeNode = (node: ModuleNode): node is ModuleExportLikeNode => {
    return isModuleExportNode(node) || isModuleExportDefaultNode(node);
}

export const isModuleDefinitionLikeNode = (node: ModuleNode): node is ModuleDefinitionLikeNode => {
    return isModuleSchemaNode(node) || isModuleVariantNode(node);
}

export const isModuleFunctionLikeNode = (node: ModuleNode): node is ModuleFunctionLikeNode => {
    return isModuleFunctionNode(node) || isModuleFunctionAltNode(node);
}

export const isModuleFunctionAltNode = (node: ModuleNode): node is ModuleFunctionAltNode => {
    return isModuleArrowFunctionNode(node) || isModuleFunctionExpressionNode(node);
}

//

export const isModuleDiscardedNode = (node: ModuleNode, mode : ModuleMode): node is ModuleDiscardedNode => {
    switch(mode) {
        case ModuleMode.Schema:
            return isModuleDiscardedSchemaNode(node);
        case ModuleMode.Variants:
            return isModuleDiscardedVariantNode(node);
        default:
            return false;
    }
}

export const isModuleDiscardedSchemaNode = (node: ModuleNode): node is ModuleDiscardedSchemaNode => {
    return isModuleVariantNode(node);
}

export const isModuleDiscardedVariantNode = (node: ModuleNode): node is ModuleDiscardedVariantNode => {
    return isModuleSchemaNode(node);
}