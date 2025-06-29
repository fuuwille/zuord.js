import { ZuordUtil } from "@/util/alias.types";

type IsNever<T> = ZuordUtil.Is<T, never>;

type IsSomeNever<U extends readonly unknown[]> = ZuordUtil.IsSome<U, never>;

type IsAllNever<U extends readonly unknown[]> = ZuordUtil.IsAll<U, never>;

type AsNonNever<U extends unknown[]> = ZuordUtil.UnionOf<U>;

type HasNever<T> = ZuordUtil.Has<T, never>;

export type { IsNever as ZuordIsNever };

export type { IsSomeNever as ZuordIsSomeNever };

export type { IsAllNever as ZuordIsAllNever };

export type { HasNever as ZuordHasNever };

export type { AsNonNever as ZuordAsNonNever };