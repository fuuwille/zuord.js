import { internalZuord as internal } from "./internal";
import { Mode } from "./mode.types";

const integrate = internal.mode.integrate satisfies Mode.Integrate;

const merge = internal.mode.merge satisfies Mode.Merge;

const pick = internal.mode.pick satisfies Mode.Pick;

const omit = internal.mode.omit satisfies Mode.Omit;

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