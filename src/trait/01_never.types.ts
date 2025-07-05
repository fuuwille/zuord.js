import { ZuordTrait as ZuordTrait } from "@/trait/_alias.types";

type EqNever<T> = ZuordTrait.Eq<T, never>;

type EqSomeNever<U extends readonly unknown[]> = ZuordTrait.EqSome<U, never>;

type EqAllNever<U extends readonly unknown[]> = ZuordTrait.EqAll<U, never>;

type IsNever<T> = ZuordTrait.Is<T, never>;

type IsSomeNever<U extends readonly unknown[]> = ZuordTrait.IsSome<U, never>;

type IsAllNever<U extends readonly unknown[]> = ZuordTrait.IsAll<U, never>;

type HasNever<T> = ZuordTrait.Has<T, never>;

type HasSomeNever<U extends readonly unknown[]> = ZuordTrait.HasSome<U, never>;

type HasAllNever<U extends readonly unknown[]> = ZuordTrait.HasAll<U, never>;

export type { EqNever as ZuordEqNever };

export type { EqSomeNever as ZuordEqSomeNever };

export type { EqAllNever as ZuordEqAllNever };

export type { IsNever as ZuordIsNever };

export type { IsSomeNever as ZuordIsSomeNever };

export type { IsAllNever as ZuordIsAllNever };

export type { HasNever as ZuordHasNever };

export type { HasSomeNever as ZuordHasSomeNever };

export type { HasAllNever as ZuordHasAllNever };