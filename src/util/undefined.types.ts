type AsNonUndefined<T> = T extends undefined ? never : T;

type IsUndefined<T> = [T] extends [undefined] ? true : false;

export type { AsNonUndefined as ZuordAsNonUndefined };

export type { IsUndefined as ZuordIsUndefined };