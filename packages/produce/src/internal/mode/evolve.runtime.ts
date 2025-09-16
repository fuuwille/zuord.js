import { integrate } from "./integrate";
import type { $ZuordMode } from ".";


//

/**
 * @internal
 */
export const plain = integrate.plain satisfies $ZuordMode.Evolve.Plain;

/**
 * @internal
 */
export const array = integrate.array satisfies $ZuordMode.Evolve.Array;