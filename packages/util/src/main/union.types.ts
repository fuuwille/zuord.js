import type { $TypeUtil } from "../internal";

export type IsUnion<T> = $TypeUtil.Union.IsUnion<T>;

export type ToIntersection<U> = $TypeUtil.Union.ToIntersection<U>;

export type ToLast<U> = $TypeUtil.Union.ToLast<U>;

export type ToTuple<U> = $TypeUtil.Union.ToTuple<U>;