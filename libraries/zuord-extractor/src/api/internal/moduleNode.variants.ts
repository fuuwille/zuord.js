import { Node, SyntaxKind, VariableStatement, ClassDeclaration, FunctionLikeDeclaration } from "ts-morph";
import { ModuleNode, ModuleModelNode, ModuleTypeNode, ModuleInterfaceNode, ModuleEnumNode, ModuleVariantNode, ModuleFunctionNode, ModuleVariableNode } from "./moduleNode.model";

export const isModuleNode = (node: Node): node is ModuleNode => {
    return isModuleModelNode(node) || isModuleVariantNode(node);
}

export const isModuleModelNode = (node: Node): node is ModuleModelNode => {
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
    return node.getKind() === SyntaxKind.FunctionDeclaration || node.getKind() === SyntaxKind.FunctionExpression || node.getKind() === SyntaxKind.ArrowFunction;
}

export const isModuleVariableNode = (node: Node): node is ModuleVariableNode => {
    return node.getKind() === SyntaxKind.VariableStatement;
}

//

export const isModuleNodeValid = (node: ModuleNode): boolean => {
    if(isModuleFunctionNode(node)) {
        return isModuleFunctionNodeValid(node);
    }

    if(isModuleVariableNode(node)) {
        return isModuleVariableNodeValid(node);
    }

    return true;
}

export const isModuleFunctionNodeValid = (node: ModuleFunctionNode): boolean => {
    if(node instanceof FunctionLikeDeclaration) {
        return true;
    }

    return false;
}

export const isModuleVariableNodeValid = (node: ModuleVariableNode): boolean => {
    if(node instanceof VariableStatement) {
        const declarations = node.getDeclarations();

        if(declarations.length == 0) {
            return false;
        }

        if(declarations.length > 1) {
            return false;
        }

        const declaration = declarations[0];

        if(declaration instanceof ClassDeclaration) {
            return false;
        }

        return true;
    }

    return false;
}