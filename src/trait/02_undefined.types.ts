import { ZuordTrait } from "./_alias.types";

type EqUndefined<T> = ZuordTrait.Eq<T, undefined>;

type EqSomeUndefined<U extends readonly unknown[]> = ZuordTrait.EqSome<U, undefined>;

type EqAllUndefined<U extends readonly unknown[]> = ZuordTrait.EqAll<U, undefined>;

type IsUndefined<T> = ZuordTrait.Is<T, undefined>;

type IsSomeUndefined<U extends readonly unknown[]> = ZuordTrait.IsSome<U, undefined>;

type IsAllUndefined<U extends readonly unknown[]> = ZuordTrait.IsAll<U, undefined>;

type HasUndefined<T> = ZuordTrait.Has<T, undefined>;

type HasSomeUndefined<U extends readonly unknown[]> = ZuordTrait.HasSome<U, undefined>;

type HasAllUndefined<U extends readonly unknown[]> = ZuordTrait.HasAll<U, undefined>;

type ExcludeUndefined<T> = ZuordTrait.Exclude<T, undefined>;

type ExcludeExactUndefined<T> = ZuordTrait.ExcludeExact<T, undefined>;

type ExtractUndefined<T> = ZuordTrait.Extract<T, undefined>;

type ExtractExactUndefined<T> = ZuordTrait.ExtractExact<T, undefined>

export type { EqUndefined as ZuordEqUndefined };

export type { EqSomeUndefined as ZuordEqSomeUndefined };

export type { EqAllUndefined as ZuordEqAllUndefined };

export type { IsUndefined as ZuordIsUndefined };

export type { IsSomeUndefined as ZuordIsSomeUndefined };

export type { IsAllUndefined as ZuordIsAllUndefined };

export type { HasUndefined as ZuordHasUndefined };

export type { HasSomeUndefined as ZuordHasSomeUndefined };

export type { HasAllUndefined as ZuordHasAllUndefined };

export type { ExcludeUndefined as ZuordExcludeUndefined };

export type { ExcludeExactUndefined as ZuordExcludeExactUndefined };

export type { ExtractUndefined as ZuordExtractUndefined };

export type { ExtractExactUndefined as ZuordExtractExactUndefined };