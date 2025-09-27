import { Type, Symbol } from "ts-morph";

export const getTypeID = (type? : Type): string | undefined => {
    if(!type) return undefined;
    const symbol = (type.getAliasSymbol() ?? type.getSymbol());

    return getTypeIDFromSymbol(symbol);
}

export const getTypeIDFromSymbol = (symbol?: Symbol): string | undefined => {
    return getTypeIDFromStr(symbol?.getName());
}

export const getTypeIDFromStr = (name?: string): string | undefined => {
    if(!name) return undefined;

    return name
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
        .toLowerCase();
}