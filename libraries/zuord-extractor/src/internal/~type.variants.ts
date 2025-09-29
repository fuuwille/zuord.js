import { Type } from "ts-morph";

export const isPrimitiveType = (type: Type): boolean => {
    if (!type) return false;

    return type.isStringLiteral() || type.isNumberLiteral() || type.isBooleanLiteral() 
        || type.isNull() || type.isUndefined() || type.isVoid() 
        || type.isNever() || type.isUnknown() || type.isAny();
}