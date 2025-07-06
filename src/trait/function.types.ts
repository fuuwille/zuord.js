import { ZuordTrait } from "./_alias.types";

type IsFunction<T> = ZuordTrait.Is<T, Function>;

type IsSomeFunction<U extends readonly unknown[]> = ZuordTrait.IsSome<U, Function>;

type IsAllFunction<U extends readonly unknown[]> = ZuordTrait.IsAll<U, Function>;

type HasFunction<T> = ZuordTrait.Has<T, Function>;

export type { IsFunction as ZuordIsFunction };

export type { IsSomeFunction as ZuordIsSomeFunction };

export type { IsAllFunction as ZuordIsAllFunction };

export type { HasFunction as ZuordHasFunction };