import { zuordCore } from "@zuord/core";
import { InternalZuord as Internal } from ".";

export const integrateBaseMode = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode]) satisfies Internal.IntegrateBaseMode;