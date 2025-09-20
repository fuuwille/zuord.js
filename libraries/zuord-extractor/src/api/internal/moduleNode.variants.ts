import { Node as TSNode, SyntaxKind } from "ts-morph";
import { ModuleNode, ModuleModelNode, ModuleTypeNode, ModuleInterfaceNode, ModuleEnumNode, ModuleVariantNode, ModuleFunctionNode, ModuleVariableNode } from "./moduleNode.model";

export const isModuleNode = (node: TSNode): node is ModuleNode => {
    return isModuleModelNode(node) || isModuleVariantNode(node);
}

export const isModuleModelNode = (node: TSNode): node is ModuleModelNode => {
    return isModuleTypeNode(node) || isModuleInterfaceNode(node) || isModuleEnumNode(node);
}

export const isModuleTypeNode = (node: TSNode): node is ModuleTypeNode => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isModuleInterfaceNode = (node: TSNode): node is ModuleInterfaceNode => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isModuleEnumNode = (node: TSNode): node is ModuleEnumNode => {
    return node.getKind() === SyntaxKind.EnumDeclaration;
}

export const isModuleVariantNode = (node: TSNode): node is ModuleVariantNode => {
    return isModuleFunctionNode(node) || isModuleVariableNode(node);
}

export const isModuleFunctionNode = (node: TSNode): node is ModuleFunctionNode => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isModuleVariableNode = (node: TSNode): node is ModuleVariableNode => {
    return node.getKind() === SyntaxKind.VariableStatement;
}