import { zuordCore } from "@zuord/core";
import { InternalZuord as Internal } from ".";

export const integrateDefaultMode = zuordCore.modeResolve([zuordCore.baseMode, zuordCore.concatMode]) satisfies Internal.IntegrateBaseMode;