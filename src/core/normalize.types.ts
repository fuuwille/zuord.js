import { ZuordUtil } from "@/util/alias.types";

type Normalize<T> = T extends any ? NormalizeDirect<T> : never;

type NormalizeDirect<T> = (
    [ZuordUtil.IsObject<T>] extends [true] ? (
        { [K in keyof T]: Normalize<T[K]> }
    ) :
    [ZuordUtil.HasArray<T>] extends [true] ? (
        Normalize<Exclude<T, unknown[]>> | NormalizeDirect<(T extends unknown[] ? T[number] : never)>[]
    ) : T
)

export type { Normalize as ZuordNormalize };