import { ZuordTrait } from "@/trait/_alias.types";

type IsBigInt<T> = ZuordTrait.Is<T, bigint>;

type IsSomeBigInt<U extends readonly unknown[]> = ZuordTrait.IsSome<U, bigint>;

export type { IsBigInt as ZuordIsBigInt };

export type { IsSomeBigInt as ZuordIsSomeBigInt };