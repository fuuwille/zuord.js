import { integrate as $integrate } from "./extended/zuord/integrate";

export const integrate = $integrate.plain.restrict;

export const integrateArray = $integrate.array.loose;