import { ZuordTrait } from "./_alias.types";

type EqNull<T> = ZuordTrait.Eq<T, null>;

type EqSomeNull<U extends readonly unknown[]> = ZuordTrait.EqSome<U, null>;

type EqAllNull<U extends readonly unknown[]> = ZuordTrait.EqAll<U, null>;

type IsNull<T> = ZuordTrait.Is<T, null>;

type IsSomeNull<U extends readonly unknown[]> = ZuordTrait.IsSome<U, null>;

type IsAllNull<U extends readonly unknown[]> = ZuordTrait.IsAll<U, null>;

type HasNull<T> = ZuordTrait.Has<T, null>;

type HasSomeNull<U extends readonly unknown[]> = ZuordTrait.HasSome<U, null>;

type HasAllNull<U extends readonly unknown[]> = ZuordTrait.HasAll<U, null>;

type ExcludeNull<T> = ZuordTrait.Exclude<T, null>;

type ExcludeExactNull<T> = ZuordTrait.ExcludeExact<T, null>;

export type { EqNull as ZuordEqNull };

export type { EqSomeNull as ZuordEqSomeNull };

export type { EqAllNull as ZuordEqAllNull };

export type { IsNull as ZuordIsNull };

export type { IsSomeNull as ZuordIsSomeNull };

export type { IsAllNull as ZuordIsAllNull };

export type { HasNull as ZuordHasNull };

export type { HasSomeNull as ZuordHasSomeNull };

export type { HasAllNull as ZuordHasAllNull };

export type { ExcludeNull as ZuordExcludeNull };

export type { ExcludeExactNull as ZuordExcludeExactNull };