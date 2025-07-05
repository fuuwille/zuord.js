import { ZuordTrait } from "./_alias.types";

type IsNull<T> = ZuordTrait.Is<T, null>;

type IsSomeNull<U extends readonly unknown[]> = ZuordTrait.IsSome<U, null>;

type IsAllNull<U extends readonly unknown[]> = ZuordTrait.IsAll<U, null>;

type HasNull<T> = ZuordTrait.Has<T, null>;

export type { IsNull as ZuordIsNull };

export type { IsSomeNull as ZuordIsSomeNull };

export type { IsAllNull as ZuordIsAllNull };

export type { HasNull as ZuordHasNull };