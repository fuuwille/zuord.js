import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";
import { InternalZuord as Internal } from "zuord/internal";

export type IntegrateBase = Type.Array | Type.Plain;

export type IntegrateBaseStrict = Type.Plain;

export type IntegrateInput = IntegrateBase;

export type IntegrateInputStrict<TBase extends IntegrateBaseStrict, TInput extends Type.Plain> = Util.ExactKeys<TBase, TInput>

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