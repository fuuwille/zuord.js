import { zuordCore as core } from "@zuord/core";

import type { ZuordMode } from "..";


//

export const plain = core.mode.resolve([core.flags.base, core.flags.concat]) satisfies ZuordMode.Extended.Integrate.Plain;

export const array = core.mode.resolve([core.flags.base, core.flags.concat, core.flags.unique]) satisfies ZuordMode.Extended.Integrate.Array;