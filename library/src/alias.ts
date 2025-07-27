import * as integrateModule from "./integrate";
import type { IntegrateAPI } from "./integrate.types";

export const integrate: IntegrateAPI = integrateModule;

export * from "./merge";
export * from "./pick";
export * from "./omit";