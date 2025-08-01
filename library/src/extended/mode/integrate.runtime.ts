import { zuordCore as core } from "@zuord/core";
import { Integrate } from "./integrate.types";

export const plain = core.mode.resolve([core.flags.base, core.flags.concat]) satisfies Integrate.Plain;

export const array = core.mode.resolve([core.flags.base, core.flags.concat, core.flags.unique]) satisfies Integrate.Array;