import * as ZuordUtil from "@/util/alias.types";

type Normalize<T> = ZuordUtil.IsArray<T> extends true ? NormalizeDirect<T> :T extends any ? NormalizeDirect<T> : never;

type NormalizeAny<T> = T extends any ? NormalizeDirect<T> : never;

type NormalizeDirect<T> = (
    ZuordUtil.IsObject<T> extends true ? (
        { [K in keyof T]: Normalize<T[K]> }
    ) :
    ZuordUtil.IsArray<T> extends true ? (
        NormalizeElement<T>| NormalizeCollection<T>
    ) : T
)

type NormalizeElement<T> = NormalizeAny<Exclude<T, unknown[]>>;

type NormalizeCollection<T> = NormalizeDirect<(T extends unknown[] ? T[number] : never)>[];

export type { Normalize as ZuordNormalize };