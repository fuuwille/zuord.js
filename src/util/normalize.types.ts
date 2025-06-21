import * as ZuordUtil from "@/util/alias.types";

type Normalize<T> = NormalizeStructural<T>;

type NormalizeDistributed<T> = T extends any ? NormalizeStructural<T> : never;

type NormalizeStructural<T> = (
    ZuordUtil.IsObject<T> extends true ? (
        { [K in keyof T]: Normalize<T[K]> }
    ) :
    true extends ZuordUtil.IsArray<T> ? (
        NormalizeDistributed<Exclude<T, unknown[]>> | NormalizeStructural<(T extends unknown[] ? T[number] : never)>[]
    ) : T
)

export type { Normalize as ZuordNormalize };