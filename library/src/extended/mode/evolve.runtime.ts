import { integrate } from "./integrate";
import type { ZuordModeX } from ".";


//

export const plain = integrate.plain satisfies ZuordModeX.Evolve.Plain;

export const array = integrate.array satisfies ZuordModeX.Evolve.Array;