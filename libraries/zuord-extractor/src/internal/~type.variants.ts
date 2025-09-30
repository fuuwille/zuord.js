import { Identifier, SyntaxKind, ts, Type, TypeFlags, TypeNode, TypePredicateNode } from "ts-morph";
import { ModuleFunctionLikeNode } from "./moduleNode.tschema";

export const isPrimitiveType = (type: Type): boolean => {
    const flags = type.compilerType.flags;

    const primitiveFlags = TypeFlags.String | TypeFlags.Number | TypeFlags.Boolean
        | TypeFlags.BigInt | TypeFlags.ESSymbol | TypeFlags.Void
        | TypeFlags.Undefined | TypeFlags.Null | TypeFlags.Never
        | TypeFlags.Any | TypeFlags.Unknown;

    return (flags & primitiveFlags) !== 0;
}

export const getTypeName = (type?: Type): string | undefined => {
    if(!type){
        return undefined;
    }

    if (isPrimitiveType(type)) {
        return type.getText();
    }

    const symbol = type.getAliasSymbol() ?? type.getSymbol();

    return symbol?.getName();
}

export const getTypeNodeName = (typeNode?: TypeNode): string | undefined => {
    if (!typeNode) {
        return undefined;
    }

    const withoutGenerics = typeNode.getText().replace(/<.*>$/, "");

    return withoutGenerics.split(".").pop();
}

export const getFunctionPredicateType = (node: ModuleFunctionLikeNode, typeNode?: TypeNode): Type | undefined => {
    typeNode ??= node.getReturnTypeNode();

    if(typeNode && ts.isTypePredicateNode(typeNode.compilerNode)) {
        const targetTypeNode = typeNode.compilerNode.type;
        if (!targetTypeNode) return undefined;

        const morphNode = node.getSourceFile().getDescendantAtPos(targetTypeNode.pos)! as unknown as Identifier;
        if (!morphNode) return undefined;

        return morphNode.getType();
    }

    return undefined;
}

export const isTypePredicateNode = (node: TypeNode | undefined): node is TypePredicateNode => {
    return !!node && node.getKind() === SyntaxKind.TypePredicate;
}