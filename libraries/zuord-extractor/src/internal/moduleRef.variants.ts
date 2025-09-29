import { ModuleNode, ModuleFunctionLikeNode, ModuleVariantLikeNode, ModuleVariableNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode, isModuleFunctionNode, isModuleVariableNode, isModuleVariantLikeNode } from "./moduleNode.variants";
import { ModuleFunctionLikeRef, ModuleFunctionRef, ModuleRef, ModuleVariableRef, ModuleVariantLikeRef } from "./moduleRef.type";

export const extractRef = (node: ModuleNode): ModuleRef => {
    if(isModuleVariantLikeNode(node)) {
        return extractVariantLikeRef(node);
    }

    return {
        node
    }
}

export const extractVariantLikeRef = (node: ModuleVariantLikeNode): ModuleVariantLikeRef => {
    if(isModuleVariableNode(node)) {
        return extractVariableRef(node);
    }

    if(isModuleFunctionNode(node)) {
        return extractFunctionLikeRef(node) as ModuleFunctionRef;
    }

    return {
        node
    }
}

export const extractVariableRef = (node: ModuleVariableNode): ModuleVariableRef => {
    const declaration = node.getDeclarations()[0];
    var initializer;

    if(declaration) {
        const initializerNode = declaration.getInitializer();

        if(initializerNode) {
            if(isModuleFunctionLikeNode(initializerNode)) {
                initializer = extractFunctionLikeRef(initializerNode);
            }
        }
    }

    return {
        node,
        initializer
    }
}

export const extractFunctionLikeRef = (node: ModuleFunctionLikeNode): ModuleFunctionLikeRef => {
    const typeNode = node.getReturnTypeNode();
    const paramTypeNode = node.getParameters()[0]?.getTypeNode();

    return {
        node,
        typeNode,
        paramTypeNode
    }
}