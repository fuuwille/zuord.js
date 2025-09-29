import { ts, Identifier, TypeNode } from "ts-morph";
import { ModuleNode, ModuleFunctionLikeNode, ModuleVariantLikeNode, ModuleVariableNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode, isModuleFunctionNode, isModuleVariableNode, isModuleVariantLikeNode } from "./moduleNode.variants";
import { ModuleFunctionRef, ModuleRef, ModuleVariableRef, ModuleVariantLikeRef } from "./moduleRef.type";
import { getFunctionPredicateType, getTypeName } from "./~type.variants";

export const extractRef = (node: ModuleNode): ModuleRef | undefined => {
    if(isModuleVariantLikeNode(node)) {
        return extractVariantLikeRef(node);
    }
}

export const extractVariantLikeRef = (node: ModuleVariantLikeNode): ModuleVariantLikeRef | undefined => {
    if(isModuleVariableNode(node)) {
        return extractVariableRef(node);
    }

    if(isModuleFunctionNode(node)) {
        return extractFunctionLikeRef(node);
    }
}

export const extractVariableRef = (node: ModuleVariableNode): ModuleVariableRef | undefined => {
    const declaration = node.getDeclarations()[0];

    if(declaration) {
        const initializer = declaration.getInitializer();

        if(initializer) {
            if(isModuleFunctionLikeNode(initializer)) {
                return extractFunctionLikeRef(initializer);
            }
        }
    }
}

export const extractFunctionLikeRef = (node: ModuleFunctionLikeNode): ModuleFunctionRef => {
    const typeNode = node.getReturnTypeNode();
    const paramTypeNode = node.getParameters()[0]?.getTypeNode();

    return {
        typeNode,
        paramTypeNode
    }
}