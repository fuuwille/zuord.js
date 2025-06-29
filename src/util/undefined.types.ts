import { ZuordUtil } from "./alias.types";

type EqUndefined<T> = ZuordUtil.Eq<T, undefined>;

type IsUndefined<T> = [T] extends [undefined] ? true : false;

type HasUndefined<T> = true extends (T extends any ? IsUndefined<T> : never) ? true : false;

type AsNonUndefined<T> = T extends any ? (EqUndefined<T> extends true ? never : T) : never;

export type { EqUndefined as ZuordEqUndefined };

export type { IsUndefined as ZuordIsUndefined };

export type { HasUndefined as ZuordHasUndefined };

export type { AsNonUndefined as ZuordAsNonUndefined };