import { zuordCore } from "@zuord/core";
import type { $ZuordMode } from ".";

export const plain = zuordCore.mode.resolve([zuordCore.flags.shallow]) satisfies $ZuordMode.Omit.Plain;