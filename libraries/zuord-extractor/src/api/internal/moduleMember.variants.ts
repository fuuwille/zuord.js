import { Node as TSNode, SyntaxKind } from "ts-morph";
import { ModuleMember, ModuleModelMember, ModuleTypeMember, ModuleInterfaceMember, ModuleVariantMember, ModuleFunctionMember, ModuleVariableMember, ModuleEnumMember } from "./moduleMember.model";

export const isModuleMember = (node: TSNode): node is ModuleMember => {
    return isModuleModelMember(node) || isModuleVariantMember(node);
}

export const isModuleTypeMember = (node: TSNode): node is ModuleTypeMember => {
    return node.getKind() === SyntaxKind.TypeAliasDeclaration;
}

export const isModuleInterfaceMember = (node: TSNode): node is ModuleInterfaceMember => {
    return node.getKind() === SyntaxKind.InterfaceDeclaration;
}

export const isModuleEnumMember = (node: TSNode): node is ModuleEnumMember => {
    return node.getKind() === SyntaxKind.EnumDeclaration;
}

export const isModuleModelMember = (node: TSNode): node is ModuleModelMember => {
    return isModuleTypeMember(node) || isModuleInterfaceMember(node);
}

export const isModuleFunctionMember = (node: TSNode): node is ModuleFunctionMember => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isModuleVariableMember = (node: TSNode): node is ModuleVariableMember => {
    return node.getKind() === SyntaxKind.VariableStatement;
}

export const isModuleVariantMember = (node: TSNode): node is ModuleVariantMember => {
    return isModuleFunctionMember(node) || isModuleVariableMember(node);
}