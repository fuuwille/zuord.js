import ZuordSchema, { IsZuordSchema, ZuordSchemaOf } from "./zuordSchema";

export type ZuordPick<T, U extends ZuordSchemaOf<T>> = {
    [K in keyof T & keyof U as IsZuordSchema<U[K]> extends true ? K : never]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? T[K] extends object
                    ? ZuordPick<T[K], U[K] & ZuordSchemaOf<T[K]>>
                    : never
                : never;
};