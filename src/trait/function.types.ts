import { ZuordTrait } from "./_alias.types";

type IsFunction<T> = ZuordTrait.Is<T, Function>;

type IsSomeFunction<U extends readonly unknown[]> = ZuordTrait.IsSome<U, Function>;

export type { IsFunction as ZuordIsFunction };

export type { IsSomeFunction as ZuordIsSomeFunction };