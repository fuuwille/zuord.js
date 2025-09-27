import { Identifier, ts, Symbol } from "ts-morph";
import { ModuleFunctionLikeNode, ModuleVariantLikeNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode } from "./moduleNode.variants";

export const extractVariantType = (node: ModuleVariantLikeNode): Symbol | undefined => {
    if(isModuleFunctionLikeNode(node)) {
        return extractFunctionLikeType(node);
    }

    return undefined;
}

export const extractFunctionLikeType = (node: ModuleFunctionLikeNode): Symbol | undefined => {

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

    return symbol;
}

export const extractVariantTypeID = (node: ModuleVariantLikeNode): string | undefined => {
    return extractVariantType(node)?.getName();
}