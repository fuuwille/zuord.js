import * as Zuord from "@/core/alias.compile"
import * as ZuordUtil from "@/util/alias.compile";

type Omit<T, U> = ZuordUtil.Normalize<OmitRaw<T, U>>;

type OmitRaw<T, U> = {
    [K in keyof T as
        K extends keyof U
            ? U[K] extends true
                ? never
                : U[K] extends object
                    ? T[K] extends object
                        ? ZuordUtil.IsNever<OmitRaw<T[K], U[K]>> extends true
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