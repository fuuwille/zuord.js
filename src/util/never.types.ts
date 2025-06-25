import { ZuordUtil } from "@/util/alias.types";

type IsNever<T> = [T] extends [never] ? true : false;

type IsSomeNever<U extends readonly unknown[]> = U extends readonly [infer First, ...infer Rest]
    ? (IsNever<First> extends true ? true : IsSomeNever<Rest>) 
    : false;

type SomeAsNonNever<U extends unknown[]> = ZuordUtil.UnionOf<U>;

export type { IsNever as ZuordIsNever };
export type { IsSomeNever as ZuordIsSomeNever };
export type { SomeAsNonNever as ZuordSomeAsNonNever };