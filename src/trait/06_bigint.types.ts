import { ZuordTrait } from "@/trait/_alias.types";

type IsBigInt<T> = ZuordTrait.Is<T, bigint>;

export type { IsBigInt as ZuordIsBigInt };