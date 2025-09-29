import { ModuleNode, ModuleFunctionLikeNode, ModuleVariantLikeNode, ModuleVariableNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode, isModuleFunctionNode, isModuleVariableNode, isModuleVariantLikeNode } from "./moduleNode.variants";
import { ModuleFunctionLikeRef, ModuleFunctionRef, ModuleRef, ModuleVariableRef, ModuleVariantLikeRef } from "./moduleRef.type";

export const extractModuleRef = (node: ModuleNode): ModuleRef => {
    if(isModuleVariantLikeNode(node)) {
        return extractModuleVariantLikeRef(node);
    }

    return {
        node
    }
}

export const extractModuleVariantLikeRef = (node: ModuleVariantLikeNode): ModuleVariantLikeRef => {
    if(isModuleVariableNode(node)) {
        return extractModuleVariableRef(node);
    }

    if(isModuleFunctionNode(node)) {
        return extractModuleFunctionLikeRef(node) as ModuleFunctionRef;
    }

    return {
        node
    }
}

export const extractModuleVariableRef = (node: ModuleVariableNode): ModuleVariableRef => {
    const declaration = node.getDeclarations()[0];
    var initializer;

    if(declaration) {
        const initializerNode = declaration.getInitializer();

        if(initializerNode) {
            if(isModuleFunctionLikeNode(initializerNode)) {
                initializer = extractModuleFunctionLikeRef(initializerNode);
            }
        }
    }

    return {
        node,
        initializer
    }
}

export const extractModuleFunctionLikeRef = (node: ModuleFunctionLikeNode): ModuleFunctionLikeRef => {
    const typeNode = node.getReturnTypeNode();
    const paramTypeNode = node.getParameters()[0]?.getTypeNode();

    return {
        node,
        typeNode,
        paramTypeNode
    }
}