import { Zuord } from "./alias.types"
import { ZuordUtil } from "../util/_alias.types";

type Omit<T, U> = Zuord.Normalize<OmitRaw<T, U>>;

type OmitRaw<T, U> = {
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

type OmitOf<T, U> = Omit<T, Zuord.Pattern<U>>;

export type { Omit as ZuordOmit };
export type { OmitRaw as ZuordOmitRaw };
export type { OmitOf as ZuordOmitOf };