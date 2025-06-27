type AsNonUndefined<T> = T extends undefined ? never : T;

type IsUndefined<T> = [T] extends [undefined] ? true : false;

type HasUndefined<T> = true extends (T extends any ? IsUndefined<T> : never) ? true : false;

export type { AsNonUndefined as ZuordAsNonUndefined };

export type { IsUndefined as ZuordIsUndefined };

export type { HasUndefined as ZuordHasUndefined };