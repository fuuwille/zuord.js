import { IsNever } from "./utils/isNever";
import { ZuordNormalize } from "./zuordNormalize";
import { ZuordSchema } from "./zuordSchema";

export type ZuordOmit<T, U> = ZuordNormalize<ZuordOmitRaw<T, U>>;

//

export type ZuordOmitRaw<T, U> = {
    [K in keyof T as
        K extends keyof U
            ? U[K] extends true
                ? never
                : U[K] extends object
                    ? T[K] extends object
                        ? IsNever<ZuordOmitRaw<T[K], U[K]>> extends true
                            ? never
                            : K
                        : K
                    : K
            : K
    ]:
        K extends keyof U
            ? U[K] extends object
                ? T[K] extends object
                    ? ZuordOmitRaw<T[K], U[K]>
                    : T[K]
                : T[K]
            : T[K];
};

export type ZuordOmitOf<T, U> = ZuordOmit<T, ZuordSchema<U>>;