import { ZuordTrait } from "@/trait/_alias.types";

type EqBoolean<T> = ZuordTrait.Eq<T, boolean>;

type EqSomeBoolean<U extends readonly unknown[]> = ZuordTrait.EqSome<U, boolean>;

type IsBoolean<T> = ZuordTrait.Is<T, boolean>;

type IsSomeBoolean<U extends readonly unknown[]> = ZuordTrait.IsSome<U, boolean>;

type IsAllBoolean<U extends readonly unknown[]> = ZuordTrait.IsAll<U, boolean>;

type HasBoolean<T> = ZuordTrait.Has<T, boolean>;

type HasSomeBoolean<U extends readonly unknown[]> = ZuordTrait.HasSome<U, boolean>;

type HasAllBoolean<U extends readonly unknown[]> = ZuordTrait.HasAll<U, boolean>;

type ExcludeBoolean<T> = ZuordTrait.Exclude<T, boolean>;

type ExcludeExactBoolean<T> = ZuordTrait.ExcludeExact<T, boolean>;

type ExtractBoolean<T> = ZuordTrait.Extract<T, boolean>;

type ExtractExactBoolean<T> = ZuordTrait.ExtractExact<T, boolean>;

export type { EqBoolean as ZuordEqBoolean };

export type { EqSomeBoolean as ZuordEqSomeBoolean };

export type { IsBoolean as ZuordIsBoolean };

export type { IsSomeBoolean as ZuordIsSomeBoolean };

export type { IsAllBoolean as ZuordIsAllBoolean };

export type { HasBoolean as ZuordHasBoolean };

export type { HasSomeBoolean as ZuordHasSomeBoolean };

export type { HasAllBoolean as ZuordHasAllBoolean };

export type { ExcludeBoolean as ZuordExcludeBoolean };

export type { ExcludeExactBoolean as ZuordExcludeExactBoolean };

export type { ExtractBoolean as ZuordExtractBoolean };

export type { ExtractExactBoolean as ZuordExtractExactBoolean };