import { ZuordSchema } from "./zuordSchema";

type IsNever<T> = [T] extends [never] ? true : false;

export type ZuordOmit<T, U extends ZuordSchema<T>> = {
    [K in keyof T as
        K extends keyof U
            ? U[K] extends true
                ? never
                : U[K] extends object
                    ? T[K] extends object
                        ? IsNever<ZuordOmit<T[K], U[K] & ZuordSchema<T[K]>>> extends true
                            ? never
                            : K
                        : K
                    : K
            : K
    ]:
        K extends keyof U
            ? U[K] extends object
                ? T[K] extends object
                    ? ZuordOmit<T[K], U[K] & ZuordSchema<T[K]>>
                    : T[K]
                : T[K]
            : T[K];
};