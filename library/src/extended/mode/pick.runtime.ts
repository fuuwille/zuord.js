import { zuordCore } from "@zuord/core";
import type { ZuordModeX } from ".";

export const plain = zuordCore.mode.resolve([zuordCore.flags.base]) satisfies ZuordModeX.Pick.Plain;