import { Zuord } from "./index"
import { ZuordUtil } from "@zuord/util";

export type Omit<T, U> = Zuord.Normalize<OmitRaw<T, U>>;

export type OmitRaw<T, U> = {
    [K in keyof T as
        K extends keyof U
            ? U[K] extends true
                ? never
                : U[K] extends object
                    ? T[K] extends object
                        ? ZuordUtil.Is<OmitRaw<T[K], U[K]>, never> extends true
                            ? never
                            : K
                        : K
                    : K
            : K
    ]:
        K extends keyof U
            ? U[K] extends object
                ? T[K] extends object
                    ? OmitRaw<T[K], U[K]>
                    : T[K]
                : T[K]
            : T[K];
};

export type OmitOf<T, U> = Omit<T, Zuord.Pattern<U>>;