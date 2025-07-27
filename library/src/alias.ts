import * as integrateModule from "./integrate";

export const integrate: {
    plain: typeof integrateModule.plain;
    plainLoose: typeof integrateModule.plainLoose;
    plainStrict: typeof integrateModule.plainStrict;
    array: typeof integrateModule.array;
    arrayStrict: typeof integrateModule.arrayStrict;
    mode: typeof integrateModule.mode;
} = integrateModule;

export * from "./merge";
export * from "./pick";
export * from "./omit";