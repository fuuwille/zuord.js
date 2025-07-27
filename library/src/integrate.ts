import { internalZuord as internal } from "./internal";
import { zuordCore as core } from "@zuord/core";
import { Object, Mode, Plain, Array } from "./integrate.types";
import { shapeZuord as shape, ShapeZuord as Shape } from "./shape";
import { ZuordUtil as Util } from "@zuord/util";

// PLAIN

/**
 * Integrates two plains by applying the values from `input` onto `base`.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input plain providing new or overriding values.
 * @returns The integrated result plain.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid plain.
 */
export function plain <TBase extends Shape.Integrate.Plain, TInput extends Util.ExactKeys<TBase, TInput>> (base: TBase, input: TInput)
    : Plain<TBase, TInput>;

/**
 * Integrates two plains by applying the values from `input` onto `base` with custom mode.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input plain providing new or overriding values.
 * @template TMode - Integration mode for customizing the behavior.
 * @returns The integrated result plain.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid plain.
 * @throws {TypeError} If `mode` is not a valid mode.
 */
export function plain <TBase extends Shape.Integrate.Plain, TInput extends Util.ExactKeys<TBase, TInput>, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode)
    : Plain<TBase, TInput, TMode>;

export function plain <TBase extends Shape.Integrate.Plain, TInput extends Shape.Integrate.Plain, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode = {} as TMode) {
    return object(base, input, mode, false);
}

/**
 * Integrates two plains by applying the values from `input` onto `base`.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input plain providing new or overriding values.
 * @returns The integrated result plain.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid plain.
 */
export function plainLoose <TBase extends Shape.Integrate.Plain, TInput extends Shape.Integrate.Plain> (base: TBase, input: TInput)
    : Plain<TBase, TInput>;

/**
 * Integrates two plains by applying the values from `input` onto `base` with custom mode.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input plain providing new or overriding values.
 * @template TMode - Integration mode for customizing the behavior.
 * @returns The integrated result plain.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid plain.
 * @throws {TypeError} If `mode` is not a valid mode.
 */
export function plainLoose <TBase extends Shape.Integrate.Plain, TInput extends Shape.Integrate.Plain, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode)
    : Plain<TBase, TInput, TMode>;

export function plainLoose <TBase extends Shape.Integrate.Plain, TInput extends Shape.Integrate.Plain, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode = {} as TMode) {
    return object(base, input, mode, false);
}

/**
 * Integrates two plains by applying the values from `input` onto `base`.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input plain providing new or overriding values.
 * @returns The integrated result plain.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid plain.
 */
export function plainStrict <TBase extends Shape.Integrate.Plain, TInput extends Util.ExactKeys<TBase, TInput>> (base: TBase, input: TInput)
    : Plain<TBase, TInput>;

/**
 * Integrates two plains by applying the values from `input` onto `base` with custom mode.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input plain providing new or overriding values.
 * @template TMode - Integration mode for customizing the behavior.
 * @returns The integrated result plain.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid plain.
 * @throws {TypeError} If `mode` is not a valid mode.
 */
export function plainStrict <TBase extends Shape.Integrate.Plain, TInput extends Util.ExactKeys<TBase, TInput>, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode)
    : Plain<TBase, TInput, TMode>;

export function plainStrict <TBase extends Shape.Integrate.Plain, TInput extends Shape.Integrate.Plain, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode = {} as TMode) {
    return object(base, input, mode, true)
}


// ARRAY

/**
 * Integrates two arrays by applying the values from `input` onto `base`.
 * 
 * @template TBase - The base array to integrate into.
 * @template TInput - The input array providing new or overriding values.
 * @returns The integrated result array.
 * 
 * @throws {TypeError} If either `base` or `input` is not a valid `IntegrateElement` (plain object or array).
 */
export function array <TBase extends Shape.Integrate.Array, TInput extends Shape.Integrate.Array> (base: TBase, input: TInput)
    : Array<TBase, TInput>;

/**
 * Integrates two arrays by applying the values from `input` onto `base`  with custom mode.
 * 
 * @template TBase - The base array to integrate into.
 * @template TInput - The input array providing new or overriding values.
 * @template TMode - Integration mode for customizing the behavior.
 * @returns The integrated result array.
 * 
 * @throws {TypeError} If either `base` or `input` is not a valid `IntegrateElement` (plain object or array).
 * @throws {TypeError} If `mode` is not a valid mode.
 */
export function array <TBase extends Shape.Integrate.Array, TInput extends Shape.Integrate.Array, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode : TMode)
    : Array<TBase, TInput, TMode>;

export function array (base: any, input: any, mode: any = {}) {
    return object(base, input, mode, false);
}

/**
 * Integrates two arrays by applying the values from `input` onto `base`.
 * 
 * @template TBase - The base array to integrate into.
 * @template TInput - The input array providing new or overriding values.
 * @returns The integrated result array.
 * 
 * @throws {TypeError} If either `base` or `input` is not a valid `IntegrateElement` (plain object or array).
 */
export function arrayStrict <TBase extends Shape.Integrate.Array, TInput extends Shape.Integrate.Array> (base: TBase, input: TInput)
    : Array<TBase, TInput>;

/**
 * Integrates two arrays by applying the values from `input` onto `base`  with custom mode.
 * 
 * @template TBase - The base array to integrate into.
 * @template TInput - The input array providing new or overriding values.
 * @template TMode - Integration mode for customizing the behavior.
 * @returns The integrated result array.
 * 
 * @throws {TypeError} If either `base` or `input` is not a valid `IntegrateElement` (plain object or array).
 * @throws {TypeError} If `mode` is not a valid mode.
 */
export function arrayStrict <TBase extends Shape.Integrate.Array, TInput extends Shape.Integrate.Array, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode)
    : Array<TBase, TInput, TMode>;

export function arrayStrict <TBase extends Shape.Integrate.Array, TInput extends Shape.Integrate.Array, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode = {} as TMode) {
    return object(base, input, mode, true);
}

function object<TBase extends Shape.Integrate.Object, TInput extends Shape.Integrate.Object, TMode extends Shape.Integrate.Mode>(base: TBase, input: TInput, mode: TMode, strict: boolean) {
    if (!shape.integrateSource(base)) {
        throw new TypeError("Integrate function expects the base to be a valid IntegrateSource.");
    }

    if (!shape.integrateSource(input)) {
        throw new TypeError("Integrate function expects the input to be a valid IntegrateSource.");
    }

    if (!shape.integrateMode(mode)) {
        throw new TypeError("Integrate function expects the mode to be a valid IntegrateMode.");
    }

    return internal.integrate(base, input, core.modeResolve([defaultMode, mode]), strict);
}


// MODE

export const defaultMode = internal.integrateMode satisfies Mode;