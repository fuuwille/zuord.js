type IsNever<T> = [T] extends [never] ? true : false;

export type ZuordOmit<T, U> = {
    [K in keyof T as
        K extends keyof U
            ? U[K] extends true
                ? never
                : U[K] extends object
                    ? IsNever<ZuordOmit<T[K], NonNullable<U[K]>>> extends true
                        ? never
                        : K
                    : K
            : K
    ]:
        K extends keyof U
            ? U[K] extends object
                ? ZuordOmit<T[K], NonNullable<U[K]>>
                : T[K]
            : T[K];
};