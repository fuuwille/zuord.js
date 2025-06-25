type AsNonUndefined<T> = T extends undefined ? never : T;

export type { AsNonUndefined as ZuordAsNonUndefined };