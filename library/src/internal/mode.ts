import { zuordCore } from "@zuord/core";
import { IntegrateMode } from "./integrate.types";
import { MergeMode } from "./merge.types";

const integrate = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode, zuordCore.uniqueMode]) satisfies IntegrateMode;

const merge = integrate satisfies MergeMode;