import type { TypeTrait } from "@zuord/trait";
import type { FundType } from "@zuord/type";

/**
 * @internal
 */
export type Plain<TSource, TPattern> = TPattern extends FundType.Plain ? {
    -readonly [K in keyof TSource as [TypeTrait.Eq.Both<TPattern[K], true>] extends [true] ? never : K]: Plain<TSource[K], TPattern[K]>;
} : TSource