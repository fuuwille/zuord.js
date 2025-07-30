import { internalZuord as internal } from "./internal";
import { zuordCore as core } from "@zuord/core";
import { Integrate } from "./integrate.types";
import { ZuordUtil as Util } from "@zuord/util";
import { zuord } from ".";
import { zuordType as type, ZuordType as Type } from "@zuord/type";
import { Mode } from "./mode.types";


// PLAIN

const $plain = (base: Type.Plain, input: Type.Plain, mode: Partial<Mode.Integrate>) => {
    if(!type.plain(base)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    if(!type.plain(input)) {
        throw new TypeError("Integrate function expects the input to be a valid plain.");
    }

    return internal.integrate.plain(base, input, core.mode.resolve([zuord.mode.integrate, mode]));
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
function plain <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>> (base: TBase, input: TInput)
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
function plain <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate>> (base: TBase, input: TInput, mode: TMode)
    : Integrate.Plain<TBase, TInput, TMode>;

function plain <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Integrate.Plain<TBase, TInput, TMode> { return $plain(base, input, mode); }

/**
 * Integrates two plains by applying the values from `input` onto `base`.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input plain providing new or overriding values.
 * @returns The integrated result plain.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid plain.
 */
function plainLoose <TBase extends Type.Plain, TInput extends Type.Plain> (base: TBase, input: TInput)
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
function plainLoose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<Mode.Integrate>> (base: TBase, input: TInput, mode: TMode)
    : Integrate.PlainLoose<TBase, TInput, TMode>;

function plainLoose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<Mode.Integrate>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Integrate.PlainLoose<TBase, TInput, TMode> { return $plain(base, input, mode); }

/**
 * Integrates two plains by applying the values from `input` onto `base`.
 *
 * @template TBase - The base plain to integrate into.
 * @template TInput - The input plain providing new or overriding values.
 * @returns The integrated result plain.
 *
 * @throws {TypeError} If either `base` or `input` is not a valid plain.
 */
function plainStrict <TBase extends Type.Plain, TInput extends Util.Exact.Keys<TBase, TInput>> (base: TBase, input: TInput)
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
function plainStrict <TBase extends Type.Plain, TInput extends Util.Exact.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate>> (base: TBase, input: TInput, mode: TMode)
    : Integrate.PlainStrict<TBase, TInput, TMode>;

function plainStrict <TBase extends Type.Plain, TInput extends Util.Exact.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Integrate.PlainStrict<TBase, TInput, TMode> { return $plain(base, input, mode); }


// ARRAY

const $array = (base: Type.Array, input: Type.Array, mode: Partial<Mode.Integrate>) => {
    if(!type.array(base)) {
        throw new TypeError("Integrate function expects the base to be a valid array.");
    }

    if(!type.array(input)) {
        throw new TypeError("Integrate function expects the input to be a valid array.");
    }

    return internal.integrate.array(base, input, core.mode.resolve([zuord.mode.integrate, mode]));
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
function array <TBase extends Type.Array, TInput extends Type.Array> (base: TBase, input: TInput)
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
function array <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<Mode.Integrate>> (base: TBase, input: TInput, mode : TMode)
    : Integrate.Array<TBase, TInput, TMode>;

function array <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<Mode.Integrate>> (base: TBase, input: TInput, mode : TMode = {} as TMode)
    : Integrate.Array<TBase, TInput, TMode> { return $array(base, input, mode) as Integrate.Array<TBase, TInput, TMode>; }


// EXPORT

type integrate = {
    readonly plain: typeof plain;
    readonly plainLoose: typeof plainLoose;
    readonly plainStrict: typeof plainStrict;
    readonly array: typeof array;
};

export const integrate : integrate = {
    plain: plain,
    plainLoose: plainLoose,
    plainStrict: plainStrict,
    array: array
};
