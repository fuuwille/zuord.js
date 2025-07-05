import { ZuordTrait } from "@/trait/_alias.types";

type EqVoid<T> = ZuordTrait.Eq<T, void>;

type IsVoid<T> = ZuordTrait.Is<T, void>;

type IsSomeVoid<U extends readonly unknown[]> = ZuordTrait.IsSome<U, void>;

type IsAllVoid<U extends readonly unknown[]> = ZuordTrait.IsAll<U, void>;

export type { EqVoid as ZuordEqVoid };

export type { IsVoid as ZuordIsVoid };

export type { IsSomeVoid as ZuordIsSomeVoid };

export type { IsAllVoid as ZuordIsAllVoid };