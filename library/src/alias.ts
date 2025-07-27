import * as _integrate from "./integrate";

export const integrate: {
    plain: typeof _integrate.plain;
    plainLoose: typeof _integrate.plainLoose;
    plainStrict: typeof _integrate.plainStrict;
    array: typeof _integrate.array;
    arrayStrict: typeof _integrate.arrayStrict;
    mode: typeof _integrate.mode;
} = _integrate;

export * from "./merge";
export * from "./pick";
export * from "./omit";