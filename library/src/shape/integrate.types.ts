import { ZuordType as Type } from "@zuord/type";
import { InternalZuord as Internal } from "zuord/internal";
import { ZuordUtil as Util } from "@zuord/util";

export type IntegrateBase = Type.Array | Type.Plain;

export type IntegrateInput = Type.Array | Type.Plain;

export type IntegrateExactInput<TBase extends Type.Plain, TInput extends Type.Plain> 
    = TBase extends Type.Plain ? TInput extends Type.Plain ? Util.ExactKeys<TBase, TInput> : TInput : TInput;

/**
 * Allowed element types for the `integrate` operations.
 * 
 * Restricts inputs to plain objects or arrays that can be deeply integrated
*/
export type IntegrateElement = Type.Array | Type.Plain;

/**
 * Partial mode settings to customize the behavior of the `integrate` operations.
*/
export type IntegrateMode = Partial<Internal.IntegrateMode>;