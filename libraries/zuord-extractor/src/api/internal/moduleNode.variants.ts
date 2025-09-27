import { Node, SyntaxKind } from "ts-morph";
import { ModuleMode } from "./module.type";
import { ModuleKnownNode, ModuleTypeLikeNode, ModuleTypeNode, ModuleInterfaceNode, ModuleEnumNode, ModuleVariantLikeNode, ModuleFunctionNode, ModuleVariableNode, ModuleDiscardedTypeNode, ModuleDiscardedVariantNode, ModuleImportNode, ModuleExportNode, ModuleExportDefaultNode, ModuleESMLikeNode, ModuleFunctionAltNode, ModuleArrowFunctionNode, ModuleFunctionExpressionNode, ModuleFunctionLikeNode, ModuleDiscardedNode, ModuleExportLikeNode } from "./moduleNode.type";

export const isModuleKnownNode = (node: Node): node is ModuleKnownNode => {
    return isModuleESMLikeNode(node) || isModuleTypeLikeNode(node) || isModuleVariantLikeNode(node);
}

export const isModuleESMLikeNode = (node: Node): node is ModuleESMLikeNode => {
    return isModuleImportNode(node) || isModuleExportLikeNode(node);
}

export const isModuleImportNode = (node: Node): node is ModuleImportNode => {
    return node.getKind() === SyntaxKind.ImportDeclaration;
}

export const isModuleExportLikeNode = (node: Node): node is ModuleExportLikeNode => {
    return isModuleExportNode(node) || isModuleExportDefaultNode(node);
}

export const isModuleExportNode = (node: Node): node is ModuleExportNode => {
    return node.getKind() === SyntaxKind.ExportDeclaration;
}

export const isModuleExportDefaultNode = (node: Node): node is ModuleExportDefaultNode => {
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

export const isModuleVariantLikeNode = (node: Node): node is ModuleVariantLikeNode => {
    return isModuleFunctionNode(node) || isModuleVariableNode(node);
}

export const isModuleFunctionNode = (node: Node): node is ModuleFunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isModuleFunctionLikeNode = (node: Node): node is ModuleFunctionLikeNode => {
    return isModuleFunctionNode(node) || isModuleFunctionAltNode(node);
}

export const isModuleFunctionAltNode = (node: Node): node is ModuleFunctionAltNode => {
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
        case ModuleMode.Type:
            return isModuleDiscardedTypeNode(node);
        case ModuleMode.Variants:
            return isModuleDiscardedVariantNode(node);
        default:
            return false;
    }
}

export const isModuleDiscardedTypeNode = (node: Node): node is ModuleDiscardedTypeNode => {
    return isModuleVariantLikeNode(node);
}

export const isModuleDiscardedVariantNode = (node: Node): node is ModuleDiscardedVariantNode => {
    return isModuleTypeLikeNode(node);
}