import { zuordCore as core } from "@zuord/core";
import { Mode } from "./mode.types";

const integrate = core.mode.resolve([core.flags.base, core.flags.concat, core.flags.unique]) satisfies Mode.Integrate;

const merge = integrate satisfies Mode.Merge;

const pick = core.flags.base satisfies Mode.Pick;

const omit = core.flags.base satisfies Mode.Omit;

type mode = {
    readonly integrate: typeof integrate;
    readonly merge: typeof merge;
    readonly pick: typeof pick;
    readonly omit: typeof omit;
}

export const mode : mode = {
    integrate: integrate,
    merge: merge,
    pick: pick,
    omit: omit
}