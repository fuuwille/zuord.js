import { integrate } from "./integrate";
import type { ProduceModeX } from ".";

export const restrict = integrate.restrict satisfies ProduceModeX.Evolve.Restrict;

export const array = integrate.array satisfies ProduceModeX.Evolve.Array;