import { integrate } from "./integrate";
import type { ZuordXMode } from ".";


//

export const restrict = integrate.restrict satisfies ZuordXMode.Evolve.Restrict;

export const array = integrate.array satisfies ZuordXMode.Evolve.Array;