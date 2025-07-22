import { zuord, Zuord } from ".";
import { internalZuord as internal, InternalZuord as Internal } from "./internal";
import { ZuordCore, zuordCore } from "@zuord/core";

export function integrate <A extends unknown, B extends unknown, TMode extends Partial<Zuord.IntegrateMode>> (a: A, b: B, mode?: TMode) {
    const resolvedMode = zuordCore.modeResolve([zuord.integrateMode, mode ?? {}]);
    type ResolvedMode = ZuordCore.ModeResolve<[typeof zuord.integrateMode, TMode]>;

    return internal.integrate(a, b, resolvedMode) as Zuord.Integrate<A, B, ResolvedMode>;
}


export const integrateMode = internal.integrateMode satisfies Internal.IntegrateMode;