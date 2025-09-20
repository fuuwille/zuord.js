import { Node as TSNode, SyntaxKind } from "ts-morph";
import { ModuleDeclaration, ModuleModelDeclaration, ModuleTypeDeclaration, ModuleInterfaceDeclaration, ModuleVariantDeclaration, ModuleFunctionDeclaration, ModuleVariableDeclaration, ModuleEnumDeclaration } from "./moduleDeclaration.model";

export const isModuleDeclaration = (node: TSNode): node is ModuleDeclaration => {
    return isModuleModelDeclaration(node) || isModuleVariantDeclaration(node);
}

export const isModuleTypeDeclaration = (node: TSNode): node is ModuleTypeDeclaration => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isModuleInterfaceDeclaration = (node: TSNode): node is ModuleInterfaceDeclaration => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isModuleEnumDeclaration = (node: TSNode): node is ModuleEnumDeclaration => {
    return node.getKind() === SyntaxKind.EnumDeclaration;
}

export const isModuleModelDeclaration = (node: TSNode): node is ModuleModelDeclaration => {
    return isModuleTypeDeclaration(node) || isModuleInterfaceDeclaration(node);
}

export const isModuleFunctionDeclaration = (node: TSNode): node is ModuleFunctionDeclaration => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isModuleVariableDeclaration = (node: TSNode): node is ModuleVariableDeclaration => {
    return node.getKind() === SyntaxKind.VariableDeclaration || node.getKind() === SyntaxKind.VariableStatement;
}

export const isModuleVariantDeclaration = (node: TSNode): node is ModuleVariantDeclaration => {
    return isModuleFunctionDeclaration(node) || isModuleVariableDeclaration(node);
}