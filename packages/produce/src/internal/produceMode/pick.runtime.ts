import { zuordCore } from "@zuord/core";
import type { $ProduceMode } from ".";

/**
 * @internal
 */
export const plain = zuordCore.modeResolve([zuordCore.mode.shallow]) satisfies $ProduceMode.Pick.Plain;