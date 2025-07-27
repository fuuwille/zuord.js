// INTEGRATE

import * as _integrate from "./integrate";

type Integrate = {
    plain: typeof _integrate.plain;
    plainLoose: typeof _integrate.plainLoose;
    plainStrict: typeof _integrate.plainStrict;
    array: typeof _integrate.array;
    arrayStrict: typeof _integrate.arrayStrict;
    mode: typeof _integrate.mode;
}

export const integrate: Integrate = _integrate;


// MERGE

import * as _merge from "./merge";

type Merge = {
    plain: typeof _merge.plain;
    mode: typeof _merge.mode;
}

export const merge: Merge = _merge;


//

export * from "./pick";
export * from "./omit";