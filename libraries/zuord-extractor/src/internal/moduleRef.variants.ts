import { ModuleNode, ModuleFunctionLikeNode, ModuleVariantNode, ModuleVariableNode, ModuleSchemaNode } from "./moduleNode.tschema";
import { isModuleFunctionLikeNode, isModuleFunctionNode, isModuleSchemaLikeNode, isModuleVariableNode, isModuleVariantLikeNode } from "./moduleNode.variants";
import { ModuleFunctionLikeRef, ModuleFunctionRef, ModuleRef, ModuleSchemaLikeRef, ModuleVariableRef, ModuleVariantLikeRef } from "./moduleRef.tschema";

export const extractModuleRef = (node: ModuleNode): ModuleRef => {

    if(isModuleSchemaLikeNode(node)) {
        return extractModuleSchemaLikeRef(node);
    }

    if(isModuleVariantLikeNode(node)) {
        return extractModuleVariantLikeRef(node);
    }

    return {
        node
    }
}

export const extractModuleSchemaLikeRef = (node: ModuleSchemaNode): ModuleSchemaLikeRef => {
    const nameNode = node.getNameNode();

    return {
        node,
        nameNode
    }
}

export const extractModuleVariantLikeRef = (node: ModuleVariantNode): ModuleVariantLikeRef => {
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