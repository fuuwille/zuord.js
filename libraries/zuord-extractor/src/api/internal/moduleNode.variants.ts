import { Node, SyntaxKind } from "ts-morph";
import { ModuleMode } from "./module.model";
import { ModuleKnownNode, ModuleTypeLikeNode, ModuleTypeNode, ModuleInterfaceNode, ModuleEnumNode, ModuleVariantNode, ModuleFunctionNode, ModuleVariableNode, ModuleDiscardedModelNode, ModuleDiscardedVariantNode, ModuleImportNode, ModuleExportNode, ModuleDefaultNode, ModuleESMNode, ModuleFunctionLikeNode, ModuleArrowFunctionNode, ModuleFunctionExpressionNode, ModuleFunctionBaseNode, ModuleDiscardedNode } from "./moduleNode.model";

export const isModuleKnownNode = (node: Node): node is ModuleKnownNode => {
    return isModuleESMNode(node) || isModuleTypeLikeNode(node) || isModuleVariantNode(node);
}

export const isModuleESMNode = (node: Node): node is ModuleESMNode => {
    return isModuleImportNode(node) || isModuleExportNode(node) || isModuleDefaultNode(node);
}

export const isModuleImportNode = (node: Node): node is ModuleImportNode => {
    return node.getKind() === SyntaxKind.ImportDeclaration;
}

export const isModuleExportNode = (node: Node): node is ModuleExportNode => {
    return node.getKind() === SyntaxKind.ExportDeclaration;
}

export const isModuleDefaultNode = (node: Node): node is ModuleDefaultNode => {
    return node.getKind() === SyntaxKind.ExportAssignment;
}

export const isModuleTypeLikeNode = (node: Node): node is ModuleTypeLikeNode => {
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

export const isModuleVariantNode = (node: Node): node is ModuleVariantNode => {
    return isModuleFunctionNode(node) || isModuleVariableNode(node);
}

export const isModuleFunctionNode = (node: Node): node is ModuleFunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isModuleFunctionBaseNode = (node: Node): node is ModuleFunctionBaseNode => {
    return isModuleFunctionNode(node) || isModuleFunctionLikeNode(node);
}

export const isModuleFunctionLikeNode = (node: Node): node is ModuleFunctionLikeNode => {
    return isModuleArrowFunctionNode(node) || isModuleFunctionExpressionNode(node);
}

export const isModuleArrowFunctionNode = (node: Node): node is ModuleArrowFunctionNode => {
    return node.getKind() === SyntaxKind.ArrowFunction;
}

export const isModuleFunctionExpressionNode = (node: Node): node is ModuleFunctionExpressionNode => {
    return node.getKind() === SyntaxKind.FunctionExpression;
}

export const isModuleVariableNode = (node: Node): node is ModuleVariableNode => {
    return node.getKind() === SyntaxKind.VariableStatement;
}

//

export const isModuleDiscardedNode = (node: Node, mode : ModuleMode): node is ModuleDiscardedNode => {
    switch(mode) {
        case ModuleMode.Model:
            return isModuleDiscardedModelNode(node);
        case ModuleMode.Variants:
            return isModuleDiscardedVariantNode(node);
        default:
            return false;
    }
}

export const isModuleDiscardedModelNode = (node: Node): node is ModuleDiscardedModelNode => {
    return isModuleVariantNode(node);
}

export const isModuleDiscardedVariantNode = (node: Node): node is ModuleDiscardedVariantNode => {
    return isModuleTypeLikeNode(node);
}