import { zuordCore } from "@zuord/core";
import type { $ZuordMode } from ".";

export const plain = zuordCore.modeResolve([zuordCore.mode.shallow]) satisfies $ZuordMode.Omit.Plain;