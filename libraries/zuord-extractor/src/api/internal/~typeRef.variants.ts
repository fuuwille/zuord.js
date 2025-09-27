import { Identifier, ts, Type } from "ts-morph";
import { ModuleFunctionLikeNode, ModuleVariantLikeNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode } from "./moduleNode.variants";

export const extractTypeRef = (node: ModuleVariantLikeNode): Type | undefined => {
    if(isModuleFunctionLikeNode(node)) {
        return extractTypeRefAsFunctionLike(node);
    }

    return undefined;
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