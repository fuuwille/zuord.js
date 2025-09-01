import type { ZuordTrait } from "@zuord/trait";
import type { ZuordType } from "@zuord/type";

export type Plain<T, P> = P extends ZuordType.Plain ? {
    -readonly [K in keyof T as [ZuordTrait.Eq.Both<P[K], true>] extends [true] ? never : K]: Plain<T[K], P[K]>;
} : T