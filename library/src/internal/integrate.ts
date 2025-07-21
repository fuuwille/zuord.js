import { zuordCore } from "../../../packages/core/src";
import { InternalZuord as Internal } from ".";

export const integrateMode = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode]) satisfies Internal.IntegrateMode;