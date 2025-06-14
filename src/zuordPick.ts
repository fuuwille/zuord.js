import { IsZuordSchema, ZuordSchema } from "./zuordSchema";

export type ZuordPick<T, U> = {
    [K in keyof T & keyof U as IsZuordSchema<U[K]> extends true ? K : never]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? T[K] extends object
                    ? ZuordPick<T[K], U[K] & ZuordSchema<T[K]>>
                    : never
                : never;
};

export type ZuordPickOf<T, U> = ZuordPick<T, ZuordSchema<U>>;