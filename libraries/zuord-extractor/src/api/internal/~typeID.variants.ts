import { Type, Symbol } from "ts-morph";

export const getTypeID = (type? : Type): string | undefined => {
    if(!type) return undefined;
    const symbol = (type.getAliasSymbol() ?? type.getSymbol());

    return getTypeIDFromSymbol(symbol);
}

export const getTypeIDFromSymbol = (symbol?: Symbol): string | undefined => {
    return symbol?.getName();
}