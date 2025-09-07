import { integrate } from "./integrate";
import type { $ZuordMode } from ".";


//

export const plain = integrate.plain satisfies $ZuordMode.Evolve.Plain;

export const array = integrate.array satisfies $ZuordMode.Evolve.Array;