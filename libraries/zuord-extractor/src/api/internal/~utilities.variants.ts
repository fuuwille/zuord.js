import { Identifier, ts, Symbol, Type } from "ts-morph";
import { ModuleFunctionLikeNode, ModuleVariantLikeNode } from "./moduleNode.type";
import { isModuleFunctionLikeNode } from "./moduleNode.variants";

export const getTypeID = (name?: string): string | undefined => {
    if(!name) return undefined;

    return name
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
        .toLowerCase();
}

export const getSymbolTypeID = (symbol?: Symbol): string | undefined => {
    return getTypeID(symbol?.getName());
}

export const extractVariantLikeType = (node: ModuleVariantLikeNode): Type | undefined => {
    if(isModuleFunctionLikeNode(node)) {
        return extractFunctionLikeType(node);
    }

    return undefined;
}

export const extractFunctionLikeType = (node: ModuleFunctionLikeNode): Type | undefined => {

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

export const extractVariantLikeTypeSymbol = (node: ModuleVariantLikeNode): Symbol | undefined => {
    const type = extractVariantLikeType(node);
    if(!type) return undefined;

    const symbol = (type.getAliasSymbol() ?? type.getSymbol());

    return symbol;
}

export const extractVariantLikeTypeID = (node: ModuleVariantLikeNode): string | undefined => {
    const symbol = extractVariantLikeTypeSymbol(node);
    return getSymbolTypeID(symbol);
}