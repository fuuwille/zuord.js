import { internalZuord as internal } from "./internal";
import { ZuordCore, zuordCore } from "@zuord/core";
import { Integrate, IntegrateMode } from "./integrate.types";

export function integrate <A extends unknown, B extends unknown, TMode extends Partial<IntegrateMode>> (a: A, b: B, mode?: TMode) {
    const resolvedMode = zuordCore.modeResolve([integrateMode, mode ?? {}]);
    type ResolvedMode = ZuordCore.ModeResolve<[typeof integrateMode, TMode]>;

    return internal.integrate(a, b, resolvedMode) as Integrate<A, B, ResolvedMode>;
}

export const integrateMode = internal.integrateMode satisfies IntegrateMode;