import { zuordCore } from "@zuord/core";
import { Mode } from "./mode.types";

const integrate = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode, zuordCore.uniqueMode]) satisfies Mode.Integrate;

const merge = integrate satisfies Mode.Merge;

type mode = {
    readonly integrate: typeof integrate;
    readonly merge: typeof merge;
}

export const mode : mode = {
    integrate: integrate,
    merge: merge
}