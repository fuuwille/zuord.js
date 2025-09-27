import { Identifier, ts, Type } from "ts-morph";
import { ModuleDefinitionLikeNode, ModuleFunctionLikeNode, ModuleTypeLikeNode, ModuleVariantLikeNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode, isModuleTypeLikeNode, isModuleVariantLikeNode } from "./moduleNode.variants";

export const extractTypeRef = (node: ModuleDefinitionLikeNode): Type | undefined => {
    if(isModuleTypeLikeNode(node)) {
        return extractTypeRefAsTypeLike(node);
    }

    if(isModuleVariantLikeNode(node)) {
        return extractTypeRefAsVariantLike(node);
    }
}

export const extractTypeRefAsTypeLike = (node: ModuleTypeLikeNode): Type => {
    return node.getType();
}

export const extractTypeRefAsVariantLike = (node: ModuleVariantLikeNode): Type | undefined => {
    if(isModuleFunctionLikeNode(node)) {
        return extractTypeRefAsFunctionLike(node);
    }
}

export const extractTypeRefAsFunctionLike = (node: ModuleFunctionLikeNode): Type | undefined => {
    const returnType = node.getReturnTypeNode();
    if(!returnType) return undefined;

    var type;

    if(ts.isTypePredicateNode(returnType.compilerNode)) {
        const targetTypeNode = returnType.compilerNode.type;
        if (!targetTypeNode) return undefined;

        const morphNode = node.getSourceFile().getDescendantAtPos(targetTypeNode.pos)! as unknown as Identifier;
        if (!morphNode) return undefined;

        type = morphNode.getType();
    }

    if(!type) {
        type  = returnType.getType();
    }

    const constraint = type.getConstraint();

    if(constraint) {
        type = constraint;
    }

    return type;
}