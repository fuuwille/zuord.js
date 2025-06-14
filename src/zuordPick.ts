export type ZuordPick<T, U> = {
    [K in keyof T & keyof U as U[K] extends undefined ? never : K]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? ZuordPick<T[K], NonNullable<U[K]>>
                : T[K];
};