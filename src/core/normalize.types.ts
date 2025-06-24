import { ZuordUtil } from "@/util/alias.types";

type Normalize<T> = T extends any ? NormalizeObject<T> : never;

type NormalizeObject<T> = (
    [ZuordUtil.IsPlainObject<T>] extends [true] ? (
        { [K in keyof T]: NormalizeObject<T[K]> }
    ) :
    [ZuordUtil.IsArray<T>] extends [true] ? (
        NormalizeObject<(T extends readonly unknown[] ? T[number] : never)>[]
    ) : T
)

export type { Normalize as ZuordNormalize };
export type { NormalizeObject as ZuordNormalizeDirect };