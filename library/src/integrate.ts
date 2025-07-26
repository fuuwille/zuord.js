import { internalZuord as internal } from "./internal";
import { zuordCore as core } from "@zuord/core";
import { Integrate, IntegrateMode } from "./integrate.types";
import { shapeZuord as shape, ShapeZuord as Shape } from "./shape";

export function integrate <A extends Shape.IntegrateElement, B extends Shape.IntegrateElement> (a: A, b: B)
    : Integrate<A, B>;

export function integrate <A extends Shape.IntegrateElement, B extends Shape.IntegrateElement, TMode extends Shape.IntegrateMode> (a: A, b: B, mode: TMode)
    : Integrate<A, B, TMode>;

export function integrate <A extends Shape.IntegrateElement, B extends Shape.IntegrateElement, TMode extends Shape.IntegrateMode> (a: A, b: B, mode?: TMode) {
    if(!(shape.integrateElement(a))) {
        throw new TypeError("Integrate function expects both arguments to be either plain objects or arrays.");
    }

    if(!(shape.integrateElement(b))) {
        throw new TypeError("Integrate function expects both arguments to be either plain objects or arrays.");
    }

    if (!shape.integrateMode(mode)) {
        throw new TypeError("Integrate function expects the mode to be a valid IntegrateMode.");
    }

    return internal.integrate(a, b, core.modeResolve([integrateMode, mode ?? {}])) as Integrate<A, B, TMode>;
}

export const integrateMode = internal.integrateMode satisfies IntegrateMode;