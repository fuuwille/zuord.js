import { ZuordTrait } from "@/trait/_alias.types";

type IsFunction<T> = ZuordTrait.Is<T, Function>;

type IsSomeFunction<U extends readonly unknown[]> = ZuordTrait.IsSome<U, Function>;

type IsAllFunction<U extends readonly unknown[]> = ZuordTrait.IsAll<U, Function>;

type HasFunction<T> = ZuordTrait.Has<T, Function>;

type HasSomeFunction<U extends readonly unknown[]> = ZuordTrait.HasSome<U, Function>;

type HasAllFunction<U extends readonly unknown[]> = ZuordTrait.HasAll<U, Function>;

export type { IsFunction as ZuordIsFunction };

export type { IsSomeFunction as ZuordIsSomeFunction };

export type { IsAllFunction as ZuordIsAllFunction };

export type { HasFunction as ZuordHasFunction };

export type { HasSomeFunction as ZuordHasSomeFunction };

export type { HasAllFunction as ZuordHasAllFunction };