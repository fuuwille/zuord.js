import { ZuordUtil } from "@/util/alias.types";

type EqNever<T> = ZuordUtil.Eq<T, never>;

type EqSomeNever<U extends readonly unknown[]> = ZuordUtil.EqSome<U, never>;

type IsNever<T> = ZuordUtil.Is<T, never>;

type IsSomeNever<U extends readonly unknown[]> = ZuordUtil.IsSome<U, never>;

type IsAllNever<U extends readonly unknown[]> = ZuordUtil.IsAll<U, never>;

type AsNonNever<U extends unknown[]> = ZuordUtil.UnionOf<U>;

type HasNever<T> = ZuordUtil.Has<T, never>;

type HasSomeNever<U extends readonly unknown[]> = ZuordUtil.HasSome<U, never>;

type HasAllNever<U extends readonly unknown[]> = ZuordUtil.HasAll<U, never>;

export type { EqNever as ZuordEqNever };

export type { EqSomeNever as ZuordEqSomeNever };

export type { IsNever as ZuordIsNever };

export type { IsSomeNever as ZuordIsSomeNever };

export type { IsAllNever as ZuordIsAllNever };

export type { HasNever as ZuordHasNever };

export type { HasSomeNever as ZuordHasSomeNever };

export type { HasAllNever as ZuordHasAllNever };

export type { AsNonNever as ZuordAsNonNever };