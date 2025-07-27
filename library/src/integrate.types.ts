import { InternalZuord as Internal } from "./internal";
import { array, arrayStrict, mode, plain, plainLoose, plainStrict } from "./integrate";
import { ZuordCore } from "@zuord/core";
import { ShapeZuord as Shape } from "./shape";

/**
 * Integrates two elements by applying the types from `input` onto `base`.
 *
 * @template TBase - The base element to integrate into.
 * @template TInput - The element providing new or overriding types.
 * @template TMode - Optional integration mode for customizing behavior.
 */
export type Integrate<TBase extends Shape.IntegrateSource, TInput extends Shape.IntegrateSource, TMode extends Shape.IntegrateMode = {}> = Internal.Integrate<TBase, TInput, ZuordCore.ModeResolve<[typeof mode, TMode]>>;

/**
 * Represents the integration mode for customizing behavior.
 */
export type IntegrateMode = Internal.IntegrateMode;

export type IntegrateAPI = {
    plain: typeof plain;
    plainLoose: typeof plainLoose;
    plainStrict: typeof plainStrict;
    array: typeof array;
    arrayStrict: typeof arrayStrict;
    mode: typeof mode;
}