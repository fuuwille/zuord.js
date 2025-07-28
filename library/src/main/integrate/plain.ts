import { Integrate } from "./types";
import { ShapeZuord as Shape } from "../../shape";
import { ZuordUtil as Util } from "@zuord/util";
import { object } from "./_object";

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