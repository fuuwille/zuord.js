import { ZuordTrait } from "@/trait/_alias.types";

type EqFunction<T> = ZuordTrait.Eq<T, Function>;

type EqSomeFunction<U extends readonly unknown[]> = ZuordTrait.EqSome<U, Function>;

type EqAllFunction<U extends readonly unknown[]> = ZuordTrait.EqAll<U, Function>;

type IsFunction<T> = ZuordTrait.Is<T, Function>;

type IsSomeFunction<U extends readonly unknown[]> = ZuordTrait.IsSome<U, Function>;

type IsAllFunction<U extends readonly unknown[]> = ZuordTrait.IsAll<U, Function>;

type HasFunction<T> = ZuordTrait.Has<T, Function>;

type HasSomeFunction<U extends readonly unknown[]> = ZuordTrait.HasSome<U, Function>;

type HasAllFunction<U extends readonly unknown[]> = ZuordTrait.HasAll<U, Function>;

export type { EqFunction as ZuordEqFunction };

export type { EqSomeFunction as ZuordEqSomeFunction };

export type { EqAllFunction as ZuordEqAllFunction };

export type { IsFunction as ZuordIsFunction };

export type { IsSomeFunction as ZuordIsSomeFunction };

export type { IsAllFunction as ZuordIsAllFunction };

export type { HasFunction as ZuordHasFunction };

export type { HasSomeFunction as ZuordHasSomeFunction };

export type { HasAllFunction as ZuordHasAllFunction };