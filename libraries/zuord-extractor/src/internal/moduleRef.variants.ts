import { ts, Identifier, TypeNode } from "ts-morph";
import { ModuleNode, ModuleFunctionLikeNode, ModuleVariantLikeNode } from "./moduleNode.type";
import { isModuleFunctionNode, isModuleVariantLikeNode } from "./moduleNode.variants";
import { ModuleFunctionRef, ModuleRef, ModuleRefTypeDef, ModuleVariantLikeRef } from "./moduleRef.type";

export const extractRef = (node: ModuleNode): ModuleRef | undefined => {
    if(isModuleVariantLikeNode(node)) {
        return extractVariantLikeRef(node);
    }
}

export const extractVariantLikeRef = (node: ModuleVariantLikeNode): ModuleVariantLikeRef | undefined => {
    if(isModuleFunctionNode(node)) {
        return extractFunctionRef(node);
    }
}

export const extractFunctionRef = (node: ModuleFunctionLikeNode): ModuleFunctionRef | undefined => {
    const returnTypeNode = node.getReturnTypeNode();
    var returnType;

    if(returnTypeNode) {
        if(ts.isTypePredicateNode(returnTypeNode.compilerNode)) {
            const targetTypeNode = returnTypeNode.compilerNode.type;
            if (!targetTypeNode) return undefined;

            const morphNode = node.getSourceFile().getDescendantAtPos(targetTypeNode.pos)! as unknown as Identifier;
            if (!morphNode) return undefined;

            returnType = morphNode.getType();
        }

        if(!returnType) {
            returnType  = returnTypeNode.getType();
        }

        const constraint = returnType.getConstraint();

        if(constraint) {
            returnType = constraint;
        }
    }

    const parameter = node.getParameters()[0];
    var parameterType;

    if(parameter) {
        parameterType = parameter.getType();
    }

    return {
        type: {
            return: returnType ?? null,
            parameter: parameterType ?? null
        }
    }
}

export const getFunctionPredicateType = (node: ModuleFunctionLikeNode, typeNode?: TypeNode): ModuleRefTypeDef | undefined => {
    typeNode ??= node.getReturnTypeNode();

    if(typeNode && ts.isTypePredicateNode(typeNode.compilerNode)) {
        const targetTypeNode = typeNode.compilerNode.type;
        if (!targetTypeNode) return undefined;

        const morphNode = node.getSourceFile().getDescendantAtPos(targetTypeNode.pos)! as unknown as Identifier;
        if (!morphNode) return undefined;

        return morphNode.getType();
    }
}