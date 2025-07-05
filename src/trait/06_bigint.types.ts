import { ZuordTrait } from "@/trait/_alias.types";

type EqBigInt<T> = ZuordTrait.Eq<T, bigint>;

type EqSomeBigInt<U extends readonly unknown[]> = ZuordTrait.EqSome<U, bigint>;

type EqAllBigInt<U extends readonly unknown[]> = ZuordTrait.EqAll<U, bigint>;

type IsBigInt<T> = ZuordTrait.Is<T, bigint>;

type IsSomeBigInt<U extends readonly unknown[]> = ZuordTrait.IsSome<U, bigint>;

type IsAllBigInt<U extends readonly unknown[]> = ZuordTrait.IsAll<U, bigint>;

type HasBigInt<T> = ZuordTrait.Has<T, bigint>;

type HasSomeBigInt<U extends readonly unknown[]> = ZuordTrait.HasSome<U, bigint>;

type HasAllBigInt<U extends readonly unknown[]> = ZuordTrait.HasAll<U, bigint>;

type ExcludeBigInt<T> = ZuordTrait.Exclude<T, bigint>;

type ExcludeExactBigInt<T> = ZuordTrait.ExcludeExact<T, bigint>;

type ExtractBigInt<T> = ZuordTrait.Extract<T, bigint>;

export type { EqBigInt as ZuordEqBigInt };

export type { EqSomeBigInt as ZuordEqSomeBigInt };

export type { EqAllBigInt as ZuordEqAllBigInt };

export type { IsBigInt as ZuordIsBigInt };

export type { IsSomeBigInt as ZuordIsSomeBigInt };

export type { IsAllBigInt as ZuordIsAllBigInt };

export type { HasBigInt as ZuordHasBigInt };

export type { HasSomeBigInt as ZuordHasSomeBigInt };

export type { HasAllBigInt as ZuordHasAllBigInt };

export type { ExcludeBigInt as ZuordExcludeBigInt };

export type { ExcludeExactBigInt as ZuordExcludeExactBigInt };

export type { ExtractBigInt as ZuordExtractBigInt };