import { internalZuord as internal } from "./internal";
import { zuordCore } from "@zuord/core";
import { Integrate, IntegrateMode } from "./integrate.types";
import { IntegrateShape } from "./internal/integrate.types";

export function integrate <A extends IntegrateShape, B extends IntegrateShape> (a: A, b: B)
    : Integrate<A, B>;

export function integrate <A extends IntegrateShape, B extends IntegrateShape, TMode extends Partial<IntegrateMode>> (a: A, b: B, mode?: TMode) {
    if(!(internal.integrateShape(a))) {
        throw new TypeError("Integrate function expects both arguments to be either plain objects or arrays.");
    }

    if(!(internal.integrateShape(b))) {
        throw new TypeError("Integrate function expects both arguments to be either plain objects or arrays.");
    }

    return internal.integrate(a, b, zuordCore.modeResolve([integrateMode, mode ?? {}])) as Integrate<A, B, TMode>;
}

export const integrateMode = internal.integrateMode satisfies IntegrateMode;