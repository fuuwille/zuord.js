import { InternalZuord as Internal } from "./internal";
import { integrateMode } from "./integrate";
import { ZuordCore } from "@zuord/core";
import { ShapeZuord as Shape } from "./shape";

/**
 * Integrates two elements by applying the types from `input` onto `base`.
 *
 * @template TBase - The base element to integrate into.
 * @template TInput - The element providing new or overriding types.
 * @template TMode - Optional integration mode for customizing behavior.
 */
export type Integrate<TBase extends Shape.IntegrateElement, TInput extends Shape.IntegrateElement, TMode extends Shape.IntegrateMode = {}> = Internal.Integrate<TBase, TInput, ZuordCore.ModeResolve<[typeof integrateMode, TMode]>>;


export type IntegrateMode = Internal.IntegrateMode;