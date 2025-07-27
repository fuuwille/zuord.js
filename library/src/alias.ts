// INTEGRATE

import * as m_integrate from "./integrate";

type Integrate = {
    plain: typeof m_integrate.plain;
    plainLoose: typeof m_integrate.plainLoose;
    plainStrict: typeof m_integrate.plainStrict;
    array: typeof m_integrate.array;
    arrayStrict: typeof m_integrate.arrayStrict;
    defaultMode: typeof m_integrate.defaultMode;
}

export const integrate: Integrate = m_integrate;


// MERGE

import * as m_merge from "./merge";

type Merge = {
    plain: typeof m_merge.plain;
    array: typeof m_merge.array;
    mode: typeof m_merge.mode;
}

export const merge: Merge = m_merge;


//

export * from "./pick";
export * from "./omit";