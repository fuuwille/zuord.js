import { Node, SyntaxKind } from "ts-morph";
import { ModuleMode } from "./module.tschema";
import { ModuleKnownNode, ModuleSchemaNode, ModuleTypeNode, ModuleInterfaceNode, ModuleEnumNode, ModuleVariantNode, ModuleFunctionNode, ModuleVariableNode, ModuleDiscardedSchemaNode, ModuleDiscardedVariantNode, ModuleImportNode, ModuleExportNode, ModuleExportDefaultNode, ModuleESMNode, ModuleFunctionAltNode, ModuleArrowFunctionNode, ModuleFunctionExpressionNode, ModuleFunctionLikeNode, ModuleDiscardedNode, ModuleExportLikeNode, ModuleDefinitionLikeNode, ModuleInitializerNode } from "./moduleNode.tschema";

// ESM Nodes
export const isModuleESMNode = (node: Node): node is ModuleESMNode => {
    return isModuleImportNode(node) || isModuleExportNode(node) || isModuleExportDefaultNode(node);
}

export const isModuleImportNode = (node: Node): node is ModuleImportNode => {
    return node.getKind() === SyntaxKind.ImportDeclaration;
}

export const isModuleExportNode = (node: Node): node is ModuleExportNode => {
    return node.getKind() === SyntaxKind.ExportDeclaration;
}

export const isModuleExportDefaultNode = (node: Node): node is ModuleExportDefaultNode => {
    return node.getKind() === SyntaxKind.ExportAssignment;
}

// Schema Nodes
export const isModuleSchemaNode = (node: Node): node is ModuleSchemaNode => {
    return isModuleTypeNode(node) || isModuleInterfaceNode(node) || isModuleEnumNode(node);
}

export const isModuleTypeNode = (node: Node): node is ModuleTypeNode => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isModuleInterfaceNode = (node: Node): node is ModuleInterfaceNode => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isModuleEnumNode = (node: Node): node is ModuleEnumNode => {
    return node.getKind() === SyntaxKind.EnumDeclaration;
}

// Variant Nodes
export const isModuleVariantNode = (node: Node): node is ModuleVariantNode => {
    return isModuleFunctionLikeNode(node) || isModuleVariableNode(node);
}

export const isModuleVariableNode = (node: Node): node is ModuleVariableNode => {
    return node.getKind() === SyntaxKind.VariableStatement;
}

export const isModuleFunctionNode = (node: Node): node is ModuleFunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

// Initializer Nodes
export const isModuleInitializerNode = (node: Node): node is ModuleInitializerNode => {
    return isModuleArrowFunctionNode(node) || isModuleFunctionExpressionNode(node);
}

export const isModuleArrowFunctionNode = (node: Node): node is ModuleArrowFunctionNode => {
    return node.getKind() === SyntaxKind.ArrowFunction;
}

export const isModuleFunctionExpressionNode = (node: Node): node is ModuleFunctionExpressionNode => {
    return node.getKind() === SyntaxKind.FunctionExpression;
}

//

export const isModuleKnownNode = (node: Node): node is ModuleKnownNode => {
    return isModuleESMNode(node) || isModuleSchemaNode(node) || isModuleVariantNode(node) || isModuleInitializerNode(node);
}

export const isModuleExportLikeNode = (node: Node): node is ModuleExportLikeNode => {
    return isModuleExportNode(node) || isModuleExportDefaultNode(node);
}

export const isModuleDefinitionLikeNode = (node: Node): node is ModuleDefinitionLikeNode => {
    return isModuleSchemaNode(node) || isModuleVariantNode(node);
}

export const isModuleFunctionLikeNode = (node: Node): node is ModuleFunctionLikeNode => {
    return isModuleFunctionNode(node) || isModuleFunctionAltNode(node);
}

export const isModuleFunctionAltNode = (node: Node): node is ModuleFunctionAltNode => {
    return isModuleArrowFunctionNode(node) || isModuleFunctionExpressionNode(node);
}

//

export const isModuleDiscardedNode = (node: Node, mode : ModuleMode): node is ModuleDiscardedNode => {
    switch(mode) {
        case ModuleMode.Schema:
            return isModuleDiscardedSchemaNode(node);
        case ModuleMode.Variants:
            return isModuleDiscardedVariantNode(node);
        default:
            return false;
    }
}

export const isModuleDiscardedSchemaNode = (node: Node): node is ModuleDiscardedSchemaNode => {
    return isModuleVariantNode(node);
}

export const isModuleDiscardedVariantNode = (node: Node): node is ModuleDiscardedVariantNode => {
    return isModuleSchemaNode(node);
}