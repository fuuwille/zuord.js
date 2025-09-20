import { Node as TSNode, SyntaxKind } from "ts-morph";
import { ModuleMember, ModuleModelMember, ModuleTypeMember, ModuleInterfaceMember, ModuleEnumMember, ModuleVariantMember, ModuleFunctionMember, ModuleVariableMember } from "./_moduleMember.model";

export const isModuleMember = (node: TSNode): node is ModuleMember => {
    return isModuleModelMember(node) || isModuleVariantMember(node);
}

export const isModuleModelMember = (node: TSNode): node is ModuleModelMember => {
    return isModuleTypeMember(node) || isModuleInterfaceMember(node) || isModuleEnumMember(node);
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

export const isModuleVariantMember = (node: TSNode): node is ModuleVariantMember => {
    return isModuleFunctionMember(node) || isModuleVariableMember(node);
}

export const isModuleFunctionMember = (node: TSNode): node is ModuleFunctionMember => {
    return node.getKind() === SyntaxKind.FunctionDeclaration;
}

export const isModuleVariableMember = (node: TSNode): node is ModuleVariableMember => {
    return node.getKind() === SyntaxKind.VariableStatement;
}