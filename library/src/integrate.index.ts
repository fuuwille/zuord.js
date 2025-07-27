import * as m_integrate from "./integrate";

type IntegrateAPI = {
    plain: typeof m_integrate.plain;
    plainLoose: typeof m_integrate.plainLoose;
    plainStrict: typeof m_integrate.plainStrict;
    array: typeof m_integrate.array;
    defaultMode: typeof m_integrate.defaultMode;
}

export const integrate: IntegrateAPI = m_integrate;

export { Integrate } from "./integrate.types";