import type { ZuordTrait } from "@zuord/trait";
import type { FundType } from "@zuord/type";

/**
 * @internal
 */
export type Plain<TSource, TPattern> = TPattern extends FundType.Plain ? {
    -readonly [K in keyof TSource as [ZuordTrait.Eq.Both<TPattern[K], true>] extends [true] ? K : never]: Plain<TSource[K], TPattern[K]>;
} : TSource