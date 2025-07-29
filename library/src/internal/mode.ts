import { zuordCore } from "@zuord/core";
import { IntegrateMode } from "./integrate.types";
import { MergeMode } from "./merge.types";

const integrate = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode, zuordCore.uniqueMode]) satisfies IntegrateMode;

const merge = integrate satisfies MergeMode;

type mode = {
    readonly integrate: typeof integrate;
    readonly merge: typeof merge;
}

export const mode : mode = {
    integrate: integrate,
    merge: merge
}