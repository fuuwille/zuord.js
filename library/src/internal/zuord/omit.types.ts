import type { ZuordTrait } from "@zuord/trait";
import type { ZuordType } from "@zuord/type";

export type Plain<TSource, TPattern> = TPattern extends ZuordType.Plain ? {
    -readonly [K in keyof TSource as [ZuordTrait.Eq.Both<TPattern[K], true>] extends [true] ? never : K]: Plain<TSource[K], TPattern[K]>;
} : TSource