import { ZuordUtil } from "@/util/alias.types";

type Normalize<T> = T extends any ? NormalizeObject<T> : never;

type NormalizeObject<T> = (
    [ZuordUtil.IsPlainObject<T>] extends [true] ? (
        NormalizePlain<T>
    ) :
    [ZuordUtil.HasArray<T>] extends [true] ? (
        Normalize<Exclude<T, readonly unknown[]>> | NormalizeObject<(T extends readonly unknown[] ? T[number] : never)>[]
    ) : T
)

type NormalizePlain<T> = (     
    { [K in keyof T]: Normalize<T[K]> }
)

export type { Normalize as ZuordNormalize };
export type { NormalizeObject as ZuordNormalizeDirect };
export type { NormalizePlain as ZuordNormalizePlain };