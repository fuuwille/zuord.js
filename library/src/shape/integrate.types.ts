import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";
import { InternalZuord as Internal } from "zuord/internal";

export type IntegrateBase = IntegrateBaseLoose;

export type IntegrateBaseLoose = Type.Array | Type.Plain;

export type IntegrateInput<TBase extends IntegrateBase, TInput extends IntegrateInputLoose> 
    = TBase extends Type.Plain ? TInput extends Type.Plain ? Util.ExactKeys<TBase, TInput> : TInput : TInput;

export type IntegrateInputLoose = Type.Array | Type.Plain;

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