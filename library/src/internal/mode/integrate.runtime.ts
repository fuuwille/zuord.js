import { zuordCore as core } from "@zuord/core";
import type { $ZuordMode } from ".";


//

export const plain = core.modeResolve([core.mode.shallow, core.mode.concat]) satisfies $ZuordMode.Integrate.Plain;

export const array = core.modeResolve([core.mode.shallow, core.mode.unique]) satisfies $ZuordMode.Integrate.Array;