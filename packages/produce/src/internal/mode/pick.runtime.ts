import { zuordCore } from "@zuord/core";
import type { $ZuordMode } from ".";

/**
 * @internal
 */
export const plain = zuordCore.modeResolve([zuordCore.mode.shallow]) satisfies $ZuordMode.Pick.Plain;