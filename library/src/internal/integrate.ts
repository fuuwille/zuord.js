import { zuordCore } from "@zuord/core";
import { InternalZuord as Internal } from ".";

export const integrateMode = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode]) satisfies Internal.IntegrateMode;