import { ZuordNormalize } from "./zuordNormalize";
import { IsZuordSchema, ZuordSchema } from "./zuordSchema";

export type ZuordPick<T, U> = ZuordNormalize<ZuordPickRaw<T, U>>;

export default ZuordPick;

//

export type ZuordPickRaw<T, U> = {
    [K in keyof T & keyof U as IsZuordSchema<U[K]> extends true ? K : never]:
        U[K] extends true
            ? T[K]
            : U[K] extends object
                ? T[K] extends object
                    ? ZuordPick<T[K], U[K]>
                    : never
                : never;
};

export type ZuordPickOf<T, U> = ZuordPick<T, ZuordSchema<U>>;