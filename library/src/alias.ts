import * as _integrate from "./integrate";

type IntegrateAPI = {
    plain: typeof _integrate.plain;
    plainLoose: typeof _integrate.plainLoose;
    plainStrict: typeof _integrate.plainStrict;
    array: typeof _integrate.array;
    arrayStrict: typeof _integrate.arrayStrict;
    mode: typeof _integrate.mode;
}

export const integrate: IntegrateAPI = _integrate;


export * from "./merge";
export * from "./pick";
export * from "./omit";