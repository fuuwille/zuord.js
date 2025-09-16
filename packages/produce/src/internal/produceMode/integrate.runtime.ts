import { zuordCore as core } from "@zuord/core";
import type { $ProduceMode } from ".";


//

/**
 * @internal
 */
export const plain = core.modeResolve([core.mode.shallow, core.mode.concat]) satisfies $ProduceMode.Integrate.Plain;

/**
 * @internal
 */
export const array = core.modeResolve([core.mode.shallow, core.mode.unique]) satisfies $ProduceMode.Integrate.Array;