import { internalZuord as internal } from "./internal";
import { zuordCore as core } from "@zuord/core";
import { Integrate, IntegrateMode } from "./integrate.types";
import { shapeZuord as shape, ShapeZuord as Shape } from "./shape";
import { ZuordType as Type } from "@zuord/type";

/**
 * Integrates two plains by applying the values from `input` onto `base`.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input providing new or overriding values.
 * @returns The integrated result value.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid `IntegrateElement` (plain object or array).
 */
export function integrate <TBase extends Type.Plain, TInput extends Shape.IntegrateExactInput<TBase, TInput>> (base: TBase, input: TInput)
    : Integrate<TBase, TInput>;

/**
 * Integrates two elements by applying the values from `input` onto `base` with custom mode.
 *
 * @template TBase - The base element to integrate into.
 * @template TInput - The element providing new or overriding values.
 * @template TMode - Integration mode for customizing the behavior.
 * @returns The integrated result value.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid `IntegrateElement (plain object or array).
 * @throws {TypeError} If `mode` is not a valid `IntegrateMode.
 */
export function integrate <TBase extends Shape.IntegrateElement, TInput extends Shape.IntegrateElement, TMode extends Shape.IntegrateMode> (base: TBase, input: TInput, mode: TMode)
    : Integrate<TBase, TInput, TMode>;

export function integrate <A extends Shape.IntegrateElement, B extends Shape.IntegrateElement, TMode extends Shape.IntegrateMode> (a: A, b: B, mode?: TMode) {
    if(!shape.integrateElement(a)) {
        throw new TypeError("Integrate function expects both arguments to be either plain objects or arrays.");
    }

    if(!shape.integrateElement(b)) {
        throw new TypeError("Integrate function expects both arguments to be either plain objects or arrays.");
    }

    if (!shape.integrateMode(mode)) {
        throw new TypeError("Integrate function expects the mode to be a valid IntegrateMode.");
    }

    return internal.integrate(a, b, core.modeResolve([integrateMode, mode ?? {}])) as Integrate<A, B, TMode>;
}

export const integrateMode = internal.integrateMode satisfies IntegrateMode;