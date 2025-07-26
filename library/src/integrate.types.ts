import { InternalZuord as Internal } from "./internal";
import { integrateMode } from "./integrate";
import { ZuordCore } from "@zuord/core";
import { ShapeZuord as Shape } from "./shape";

/**
 * Integrates two elements by applying the values from `B` onto `A`.
 * 
 * - `A`: The original element to be integrated into.
 * - `B`: The element providing new values.
 * 
 * @template A - The base element.
 * @template B - The element to integrate from.
 * @template TMode - Optional integration mode settings.
 */
export type Integrate<A extends Shape.IntegrateElement, B extends Shape.IntegrateElement, TMode extends Shape.IntegrateMode = {}> = Internal.Integrate<A, B, ZuordCore.ModeResolve<[typeof integrateMode, TMode]>>;

export type IntegrateMode = Internal.IntegrateMode;