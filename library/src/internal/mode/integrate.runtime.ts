import { zuordCore as core } from "@zuord/core";
import type { $ZuordMode } from ".";


//

export const plain = core.mode.resolve([core.flags.base, core.flags.concat]) satisfies $ZuordMode.Integrate.Plain;

export const array = core.mode.resolve([core.flags.base, core.flags.unique]) satisfies $ZuordMode.Integrate.Array;