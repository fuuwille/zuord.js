import { internalZuord as internal } from "./internal";
import { zuordCore as core } from "@zuord/core";
import { Integrate, IntegrateMode } from "./integrate.types";
import { shapeZuord as shape, ShapeZuord as Shape } from "./shape";
import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export const integrate = {
    plain: integratePlain,
    plainLoose: integratePlainLoose,
    plainStrict: integratePlainStrict,
    array: integrateArray,
    arrayStrict: integrateArrayStrict
};

/**
 * Integrates two plains by applying the values from `input` onto `base`.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input plain providing new or overriding values.
 * @returns The integrated result plain.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid plain.
 */
export function integratePlain <TBase extends Type.Plain, TInput extends Util.ExactKeys<TBase, TInput>> (base: TBase, input: TInput)
    : Integrate<TBase, TInput>;

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
export function integratePlain <TBase extends Type.Plain, TInput extends Util.ExactKeys<TBase, TInput>, TMode extends Shape.IntegrateMode> (base: TBase, input: TInput, mode: TMode)
    : Integrate<TBase, TInput, TMode>;

export function integratePlain (base: any, input: any, mode: any = {}) {
    return doIntegrate(base, input, mode, false);
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
export function integratePlainLoose <TBase extends Type.Plain, TInput extends Type.Plain> (base: TBase, input: TInput)
    : Integrate<TBase, TInput>;

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
export function integratePlainLoose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Shape.IntegrateMode> (base: TBase, input: TInput, mode: TMode)
    : Integrate<TBase, TInput, TMode>;

export function integratePlainLoose <TBase extends Shape.IntegrateSource, TInput extends Shape.IntegrateSource, TMode extends Shape.IntegrateMode> (base: TBase, input: TInput, mode: TMode = {} as TMode) {
    return doIntegrate(base, input, mode, false) as Integrate<TBase, TInput, TMode>;
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
export function integratePlainStrict <TBase extends Type.Plain, TInput extends Util.ExactKeys<TBase, TInput>> (base: TBase, input: TInput)
    : Integrate<TBase, TInput>;

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
export function integratePlainStrict <TBase extends Type.Plain, TInput extends Util.ExactKeys<TBase, TInput>, TMode extends Shape.IntegrateMode> (base: TBase, input: TInput, mode: TMode)
    : Integrate<TBase, TInput, TMode>;

export function integratePlainStrict <TBase extends Shape.IntegrateSource, TInput extends Shape.IntegrateSource, TMode extends Shape.IntegrateMode> (base: TBase, input: TInput, mode: TMode = {} as TMode) {
    return doIntegrate(base, input, mode, true) as Integrate<TBase, TInput, TMode>;
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
export function integrateArray <TBase extends Type.Array, TInput extends Type.Array> (base: TBase, input: TInput)
    : Integrate<TBase, TInput>;

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
export function integrateArray <TBase extends Type.Array, TInput extends Type.Array, TMode extends Shape.IntegrateMode> (base: TBase, input: TInput, mode : TMode)
    : Integrate<TBase, TInput, TMode>;

export function integrateArray (base: any, input: any, mode: any = {}) {
    return doIntegrate(base, input, mode, false);
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
export function integrateArrayStrict <TBase extends Type.Array, TInput extends Type.Array> (base: TBase, input: TInput)
    : Integrate<TBase, TInput>;

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
export function integrateArrayStrict <TBase extends Type.Array, TInput extends Type.Array, TMode extends Shape.IntegrateMode> (base: TBase, input: TInput, mode: TMode)
    : Integrate<TBase, TInput, TMode>;

export function integrateArrayStrict <TBase extends Shape.IntegrateSource, TInput extends Shape.IntegrateSource, TMode extends Shape.IntegrateMode> (base: TBase, input: TInput, mode: TMode = {} as TMode) {
    return doIntegrate(base, input, mode, true) as Integrate<TBase, TInput, TMode>;
}

function doIntegrate<TBase extends Shape.IntegrateSource, TInput extends Shape.IntegrateSource, TMode extends Shape.IntegrateMode>(base: TBase, input: TInput, mode: TMode, strict: boolean) {
    if (!shape.integrateSource(base)) {
        throw new TypeError("Integrate function expects the base to be a valid IntegrateSource.");
    }

    if (!shape.integrateSource(input)) {
        throw new TypeError("Integrate function expects the input to be a valid IntegrateSource.");
    }

    if (!shape.integrateMode(mode)) {
        throw new TypeError("Integrate function expects the mode to be a valid IntegrateMode.");
    }

    return internal.integrate(base, input, core.modeResolve([integrateMode, mode]), strict);
}

//

export const integrateMode = internal.integrateMode satisfies IntegrateMode;