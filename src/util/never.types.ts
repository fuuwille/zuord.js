import { ZuordUtil } from "@/util/alias.types";

type IsNever<T> = ZuordUtil.Is<T, never>;

type IsSomeNever<U extends readonly unknown[]> = ZuordUtil.IsSome<U, never>;

type AsNonNever<U extends unknown[]> = ZuordUtil.UnionOf<U>;

export type { IsNever as ZuordIsNever };
export type { IsSomeNever as ZuordIsSomeNever };
export type { AsNonNever as ZuordAsNonNever };