import { ZuordUtil } from "./_alias.types";

type EqUndefined<T> = ZuordUtil.Eq<T, undefined>;

type EqSomeUndefined<U extends readonly unknown[]> = ZuordUtil.EqSome<U, undefined>;

type EqAllUndefined<U extends readonly unknown[]> = ZuordUtil.EqAll<U, undefined>;

type IsUndefined<T> = ZuordUtil.Is<T, undefined>;

type IsSomeUndefined<U extends readonly unknown[]> = ZuordUtil.IsSome<U, undefined>;

type IsAllUndefined<U extends readonly unknown[]> = ZuordUtil.IsAll<U, undefined>;

type HasUndefined<T> = ZuordUtil.Has<T, undefined>;

type HasSomeUndefined<U extends readonly unknown[]> = ZuordUtil.HasSome<U, undefined>;

type HasAllUndefined<U extends readonly unknown[]> = ZuordUtil.HasAll<U, undefined>;

type ExcludeExactUndefined<T> = T extends any ? (EqUndefined<T> extends true ? never : T) : never;

export type { EqUndefined as ZuordEqUndefined };

export type { EqSomeUndefined as ZuordEqSomeUndefined };

export type { EqAllUndefined as ZuordEqAllUndefined };

export type { IsUndefined as ZuordIsUndefined };

export type { IsSomeUndefined as ZuordIsSomeUndefined };

export type { IsAllUndefined as ZuordIsAllUndefined };

export type { HasUndefined as ZuordHasUndefined };

export type { HasSomeUndefined as ZuordHasSomeUndefined };

export type { HasAllUndefined as ZuordHasAllUndefined };

export type { ExcludeExactUndefined as ZuordExcludeExactUndefined };