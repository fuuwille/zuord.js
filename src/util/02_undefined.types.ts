import { ZuordUtil } from "./alias.types";

type EqUndefined<T> = ZuordUtil.Eq<T, undefined>;

type EqSomeUndefined<U extends readonly unknown[]> = ZuordUtil.EqSome<U, undefined>;

type EqAllUndefined<U extends readonly unknown[]> = ZuordUtil.EqAll<U, undefined>;

type IsUndefined<T> = ZuordUtil.Is<T, undefined>;

type HasUndefined<T> = ZuordUtil.Has<T, undefined>;

type AsNonUndefined<T> = T extends any ? (EqUndefined<T> extends true ? never : T) : never;

export type { EqUndefined as ZuordEqUndefined };

export type { EqSomeUndefined as ZuordEqSomeUndefined };

export type { EqAllUndefined as ZuordEqAllUndefined };

export type { IsUndefined as ZuordIsUndefined };

export type { HasUndefined as ZuordHasUndefined };

export type { AsNonUndefined as ZuordAsNonUndefined };