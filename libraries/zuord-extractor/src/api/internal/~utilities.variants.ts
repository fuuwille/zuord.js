import { Identifier, ts, Type, TypeReferenceNode } from "ts-morph";
import { ModuleFunctionLikeNode, ModuleVariantLikeNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode } from "./moduleNode.variants";

export const extractTypeID = (node: ModuleVariantLikeNode): string | undefined => {
    if(isModuleFunctionLikeNode(node)) {
        return extractFunctionLikeTypeID(node);
    }

    return undefined;
}

export const extractFunctionLikeTypeID = (node: ModuleFunctionLikeNode): string | undefined => {

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

    const symbol = constraint 
        ? (constraint.getAliasSymbol() ?? constraint.getSymbol())
        : (type.getAliasSymbol() ?? type.getSymbol())

    return symbol?.getName();
}