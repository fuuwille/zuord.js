import { zuordCore } from "@zuord/core";
import { Mode } from "./mode.types";

const integrate = zuordCore.mode.resolve([zuordCore.baseMode, zuordCore.concatMode, zuordCore.uniqueMode]) satisfies Mode.Integrate;

const merge = integrate satisfies Mode.Merge;

const pick = zuordCore.baseMode satisfies Mode.Pick;

const omit = zuordCore.baseMode satisfies Mode.Omit;

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