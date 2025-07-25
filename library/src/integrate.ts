import { internalZuord as internal } from "./internal";
import { zuordCore } from "@zuord/core";
import { Integrate, IntegrateMode } from "./integrate.types";
import { zuordShape, ZuordShape } from "./shape";

export function integrate <A extends ZuordShape.IntegrateElement, B extends ZuordShape.IntegrateElement> (a: A, b: B)
    : Integrate<A, B>;

export function integrate <A extends ZuordShape.IntegrateElement, B extends ZuordShape.IntegrateElement, TMode extends Partial<IntegrateMode>> (a: A, b: B, mode: TMode)
    : Integrate<A, B, TMode>;

export function integrate <A extends ZuordShape.IntegrateElement, B extends ZuordShape.IntegrateElement, TMode extends Partial<IntegrateMode>> (a: A, b: B, mode?: TMode) {
    if(!(zuordShape.integrateElement(a))) {
        throw new TypeError("Integrate function expects both arguments to be either plain objects or arrays.");
    }

    if(!(zuordShape.integrateElement(b))) {
        throw new TypeError("Integrate function expects both arguments to be either plain objects or arrays.");
    }

    return internal.integrate(a, b, zuordCore.modeResolve([integrateMode, mode ?? {}])) as Integrate<A, B, TMode>;
}

export const integrateMode = internal.integrateMode satisfies IntegrateMode;