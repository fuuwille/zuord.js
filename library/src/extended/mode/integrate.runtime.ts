import { zuordCore as core } from "@zuord/core";

import type { ZuordX } from "..";


//

export const plain = core.mode.resolve([core.flags.base, core.flags.concat]) satisfies ZuordX.Mode.Integrate.Plain;

export const array = core.mode.resolve([core.flags.base, core.flags.concat, core.flags.unique]) satisfies ZuordX.Mode.Integrate.Array;