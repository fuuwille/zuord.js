import { ZuordTrait } from "@/trait/_alias.types";

type IsVoid<T> = ZuordTrait.Is<T, void>;

type IsSomeVoid<U extends readonly unknown[]> = ZuordTrait.IsSome<U, void>;

export type { IsVoid as ZuordIsVoid };

export type { IsSomeVoid as ZuordIsSomeVoid };