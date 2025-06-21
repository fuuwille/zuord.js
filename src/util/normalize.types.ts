import * as ZuordUtil from "@/util/alias.types";

type Normalize<T> = ZuordUtil.IsArray<T> extends true ? NormalizeStructural<T> :T extends any ? NormalizeStructural<T> : never;

type NormalizeDistributed<T> = T extends any ? NormalizeStructural<T> : never;

type NormalizeStructural<T> = (
    ZuordUtil.IsObject<T> extends true ? (
        { [K in keyof T]: Normalize<T[K]> }
    ) :
    ZuordUtil.IsArray<T> extends true ? (
        NormalizeElement<T>| NormalizeCollection<T>
    ) : T
)

type NormalizeElement<T> = NormalizeDistributed<Exclude<T, unknown[]>>;

type NormalizeCollection<T> = NormalizeStructural<(T extends unknown[] ? T[number] : never)>[];

export type { Normalize as ZuordNormalize };