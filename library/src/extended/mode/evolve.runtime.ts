import { integrate } from "./integrate";
import type { ZuordModeX } from ".";


//

export const restrict = integrate.restrict satisfies ZuordModeX.Evolve.Restrict;

export const array = integrate.array satisfies ZuordModeX.Evolve.Array;