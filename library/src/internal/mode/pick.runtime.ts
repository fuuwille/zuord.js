import { zuordCore } from "@zuord/core";
import type { $ZuordMode } from ".";

export const plain = zuordCore.mode.resolve([zuordCore.flags.base]) satisfies $ZuordMode.Pick.Plain;