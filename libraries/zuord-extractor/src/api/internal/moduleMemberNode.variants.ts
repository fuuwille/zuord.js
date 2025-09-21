import { Node, SyntaxKind } from "ts-morph";
import { ModuleMemberNode, ModuleMemberModelNode, ModuleMemberTypeNode, ModuleMemberInterfaceNode, ModuleMemberEnumNode, ModuleMemberVariantNode, ModuleMemberFunctionNode, ModuleMemberVariableNode, ModuleMemberDiscardedModelNode, ModuleMemberDiscardedVariantNode, ModuleImportNode, ModuleExportNode, ModuleDefaultNode, ModuleESMNode } from "./moduleMemberNode.model";

export const isModuleMemberNode = (node: Node): node is ModuleMemberNode => {
    return isModuleESMNode(node) || isModuleMemberModelNode(node) || isModuleMemberVariantNode(node);
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

export const isModuleMemberModelNode = (node: Node): node is ModuleMemberModelNode => {
    return isModuleMemberTypeNode(node) || isModuleMemberInterfaceNode(node) || isModuleMemberEnumNode(node);
}

export const isModuleMemberTypeNode = (node: Node): node is ModuleMemberTypeNode => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isModuleMemberInterfaceNode = (node: Node): node is ModuleMemberInterfaceNode => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isModuleMemberEnumNode = (node: Node): node is ModuleMemberEnumNode => {
    return node.getKind() === SyntaxKind.EnumDeclaration;
}

export const isModuleMemberVariantNode = (node: Node): node is ModuleMemberVariantNode => {
    return isModuleMemberFunctionNode(node) || isModuleMemberVariableNode(node);
}

export const isModuleMemberFunctionNode = (node: Node): node is ModuleMemberFunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isModuleMemberVariableNode = (node: Node): node is ModuleMemberVariableNode => {
    return node.getKind() === SyntaxKind.VariableStatement;
}

//

export const isModuleMemberDiscardedModelNode = (node: Node): node is ModuleMemberDiscardedModelNode => {
    return isModuleMemberVariantNode(node);
}

export const isModuleMemberDiscardedVariantNode = (node: Node): node is ModuleMemberDiscardedVariantNode => {
    return isModuleMemberModelNode(node);
}