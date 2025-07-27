import { internalZuord as internal } from "./internal";
import { zuordCore as core } from "@zuord/core";
import { Integrate } from "./integrate.index";
import { shapeZuord as shape, ShapeZuord as Shape } from "./shape";
import { ZuordUtil as Util } from "@zuord/util";


// OBJECT

function object(base: Shape.Integrate.Object, input: Shape.Integrate.Object, mode: Shape.Integrate.Mode, strict: boolean) {
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
export function plain <TBase extends Shape.Integrate.Plain, TInput extends Util.Exact.Plain<TBase, TInput>> (base: TBase, input: TInput)
    : Integrate.Plain<TBase, TInput>;

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
export function plain <TBase extends Shape.Integrate.Plain, TInput extends Util.Exact.Plain<TBase, TInput>, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode)
    : Integrate.Plain<TBase, TInput, TMode>;

export function plain <TBase extends Shape.Integrate.Plain, TInput extends Util.Exact.Plain<TBase, TInput>, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Integrate.Plain<TBase, TInput, TMode> { return object(base, input, mode, false); }

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
    : Integrate.PlainLoose<TBase, TInput>;

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
    : Integrate.PlainLoose<TBase, TInput, TMode>;

export function plainLoose <TBase extends Shape.Integrate.Plain, TInput extends Shape.Integrate.Plain, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Integrate.PlainLoose<TBase, TInput, TMode> { return object(base, input, mode, false); }

/**
 * Integrates two plains by applying the values from `input` onto `base`.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input plain providing new or overriding values.
 * @returns The integrated result plain.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid plain.
 */
export function plainStrict <TBase extends Shape.Integrate.Plain, TInput extends Util.Exact.PlainStrict<TBase, TInput>> (base: TBase, input: TInput)
    : Integrate.PlainStrict<TBase, TInput>;

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
export function plainStrict <TBase extends Shape.Integrate.Plain, TInput extends Util.Exact.PlainStrict<TBase, TInput>, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode)
    : Integrate.PlainStrict<TBase, TInput, TMode>;

export function plainStrict <TBase extends Shape.Integrate.Plain, TInput extends Util.Exact.PlainStrict<TBase, TInput>, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Integrate.PlainStrict<TBase, TInput, TMode> { return object(base, input, mode, true); }


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
    : Integrate.Array<TBase, TInput>;

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
    : Integrate.Array<TBase, TInput, TMode>;

export function array <TBase extends Shape.Integrate.Array, TInput extends Shape.Integrate.Array, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode : TMode = {} as TMode)
    : Integrate.Array<TBase, TInput, TMode> { return object(base, input, mode, false); }

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
    : Integrate.Array<TBase, TInput>;

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
    : Integrate.Array<TBase, TInput, TMode>;

export function arrayStrict <TBase extends Shape.Integrate.Array, TInput extends Shape.Integrate.Array, TMode extends Shape.Integrate.Mode> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Integrate.Array<TBase, TInput, TMode> { return object(base, input, mode, true); }


// MODE

export const defaultMode = internal.integrateMode satisfies Integrate.Mode;