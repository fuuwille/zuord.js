import { Identifier, Node, QualifiedName, SyntaxKind, ts, Type, TypeFlags, TypeNode, TypePredicateNode, TypeReferenceNode } from "ts-morph";
import { ModuleFunctionLikeNode } from "./moduleNode.tschema";

export const isPrimitiveType = (type: Type): boolean => {
    const flags = type.compilerType.flags;

    const primitiveFlags = TypeFlags.String | TypeFlags.Number | TypeFlags.Boolean
        | TypeFlags.BigInt | TypeFlags.ESSymbol | TypeFlags.Void
        | TypeFlags.Undefined | TypeFlags.Null | TypeFlags.Never
        | TypeFlags.Any | TypeFlags.Unknown;

    return (flags & primitiveFlags) !== 0;
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

export const isTypePredicateNode = (node: Node | undefined): node is TypePredicateNode => {
    return !!node && node.getKind() === SyntaxKind.TypePredicate;
}

export const isTypeReferenceNode = (node: Node | undefined): node is TypeReferenceNode => {
    return !!node && node.getKind() === SyntaxKind.TypeReference;
}

export const getTypeReferenceChild = (node: Node | undefined): TypeReferenceNode | undefined => {
    if (!node) return undefined;
    return node.getFirstChild(isTypeReferenceNode) as TypeReferenceNode | undefined;
}

export const getQualifiedNameChild = (node: Node | undefined): QualifiedName | undefined => {
    if (!node) return undefined;
    return node.getFirstChild(n => n.getKind() === SyntaxKind.QualifiedName) as QualifiedName | undefined;
}

export const getIdentifierChild = (node: Node | undefined): Identifier | undefined => {
    if (!node) return undefined;
    return node.getFirstChild(n => n.getKind() === SyntaxKind.Identifier) as Identifier | undefined;
}

export const getTypeText = (node?: Node): string | undefined => {

    var typeRef;
    if(isTypeReferenceNode(node)) {
        typeRef = node;
    }
    else {
        typeRef = getTypeReferenceChild(node);
    }

    const identifier = getIdentifierChild(typeRef);

    return identifier?.getText();
}

export const getTypeName = (node: Node | undefined, body: ModuleFunctionLikeNode): string | undefined => {
    var name = getTypeText(node);

    if(name) {
        const typeParameter = body.getTypeParameter(name);

        if(typeParameter) {
            name = getTypeText(typeParameter);
        }
    }

    return name;
}