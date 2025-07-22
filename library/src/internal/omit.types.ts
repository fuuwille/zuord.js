import { InternalZuord } from "."
import { ZuordTrait } from "@zuord/trait";

export type Omit<T, U> = {
    [K in keyof T as
        K extends keyof U
            ? U[K] extends true
                ? never
                : U[K] extends object
                    ? T[K] extends object
                        ? ZuordTrait.Is<Omit<T[K], U[K]>, never> extends true
                            ? never
                            : K
                        : K
                    : K
            : K
    ]:
        K extends keyof U
            ? U[K] extends object
                ? T[K] extends object
                    ? Omit<T[K], U[K]>
                    : T[K]
                : T[K]
            : T[K];
};

export type OmitOf<T, U> = Omit<T, InternalZuord.Pattern<U>>;