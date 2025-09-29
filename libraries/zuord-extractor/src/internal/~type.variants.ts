import { Type, TypeFlags } from "ts-morph";

export const isPrimitiveType = (type: Type): boolean => {
    const flags = type.compilerType.flags;

    const primitiveFlags = TypeFlags.String | TypeFlags.Number | TypeFlags.Boolean
        | TypeFlags.BigInt | TypeFlags.ESSymbol | TypeFlags.Void
        | TypeFlags.Undefined | TypeFlags.Null | TypeFlags.Never
        | TypeFlags.Any | TypeFlags.Unknown;

    return (flags & primitiveFlags) !== 0;
}

export const getTypeName = (type: Type): string | undefined => {
    if (isPrimitiveType(type)) {
        return type.getText();
    }

    return undefined;
}