import * as ZuordUtil from "@/util/alias.types";

type Normalize<T> = ZuordUtil.IsArray<T> extends true ? NormalizeDirect<T> :T extends any ? NormalizeDirect<T> : never;

type NormalizeAny<T> = T extends any ? NormalizeDirect<T> : never;

type NormalizeDirect<T> = (
    ZuordUtil.IsObject<T> extends true ? (
        { [K in keyof T]: Normalize<T[K]> }
    ) :
    ZuordUtil.IsArray<T> extends true ? (
        NormalizeAny<Exclude<T, unknown[]>> | NormalizeDirect<(T extends unknown[] ? T[number] : never)>[]
    ) : T
)

export type { Normalize as ZuordNormalize };


type A = number[] | string[][];

type Result = Normalize<A>

type TEST = ZuordUtil.IsArray<A> extends true ? true : false;
