import { ts, Identifier, TypeNode } from "ts-morph";
import { ModuleNode, ModuleFunctionLikeNode, ModuleVariantLikeNode, ModuleVariableNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode, isModuleFunctionNode, isModuleVariableNode, isModuleVariantLikeNode } from "./moduleNode.variants";
import { ModuleFunctionRef, ModuleRef, ModuleRefTypeDef, ModuleVariableRef, ModuleVariantLikeRef } from "./moduleRef.type";

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
        return extractFunctionRef(node);
    }
}

export const extractVariableRef = (node: ModuleVariableNode): ModuleVariableRef | undefined => {
    const declaration = node.getDeclarations()[0];

    if(declaration) {
        const initializer = declaration.getInitializer();

        if(initializer) {
            if(isModuleFunctionLikeNode(initializer)) {
                return extractFunctionRef(initializer);
            }
        }
    }
}

export const extractFunctionRef = (node: ModuleFunctionLikeNode): ModuleFunctionRef => {
    return {
        type: {
            return: getFunctionReturnType(node),
            parameter: getFunctionParameterType(node)
        }
    }
}

export const getFunctionReturnType = (node: ModuleFunctionLikeNode): ModuleRefTypeDef => {
    const returnNode = node.getReturnTypeNode();

    var returnType = getFunctionPredicateType(node, returnNode);

    if(!returnType && returnNode) {
        returnType  = returnNode.getType();
    }

    const constraint = returnType?.getConstraint();

    if(constraint) {
        returnType = constraint;
    }

    return returnType ?? null;
}

export const getFunctionPredicateType = (node: ModuleFunctionLikeNode, typeNode?: TypeNode): ModuleRefTypeDef => {
    typeNode ??= node.getReturnTypeNode();

    if(typeNode && ts.isTypePredicateNode(typeNode.compilerNode)) {
        const targetTypeNode = typeNode.compilerNode.type;
        if (!targetTypeNode) return null;

        const morphNode = node.getSourceFile().getDescendantAtPos(targetTypeNode.pos)! as unknown as Identifier;
        if (!morphNode) return null;

        return morphNode.getType();
    }

    return null;
}

export const getFunctionParameterType = (node: ModuleFunctionLikeNode): ModuleRefTypeDef => {
    const parameter = node.getParameters()[0];

    if(parameter) {
        return parameter.getType();
    }

    return null;
}
