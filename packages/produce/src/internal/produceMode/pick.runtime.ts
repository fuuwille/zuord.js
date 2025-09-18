import { zuord } from "zuord";
import type { $ProduceMode } from ".";

/**
 * @internal
 */
export const plain = zuord.modeResolve([zuord.mode.shallow]) satisfies $ProduceMode.Pick.Plain;