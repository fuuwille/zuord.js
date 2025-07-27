import * as integrateModule from "./integrate";
import type { IntegrateAPI } from "./integrate.types";
export * from "./merge";
export * from "./pick";
export * from "./omit";

export const integrate: IntegrateAPI = integrateModule;