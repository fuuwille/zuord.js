import { integrate } from "./integrate";
import type { $ProduceMode } from ".";


//

/**
 * @internal
 */
export const plain = integrate.plain satisfies $ProduceMode.Evolve.Plain;

/**
 * @internal
 */
export const array = integrate.array satisfies $ProduceMode.Evolve.Array;