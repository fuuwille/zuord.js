export type ZuordPick<T, U> = {
    [K in keyof T & keyof U as
        U[K] extends true
            ? K
            : U[K] extends object
                ? K
                : never
    ]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? ZuordPick<T[K], NonNullable<U[K]>>
                : never;
};