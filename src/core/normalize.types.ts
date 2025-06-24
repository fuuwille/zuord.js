import { ZuordUtil } from "@/util/alias.types";

type Normalize<T> = (
    [ZuordUtil.IsPlain<T>] extends [true] ? (
        { [K in keyof T]: Normalize<T[K]> }
    ) :
    [ZuordUtil.IsArray<T>] extends [true] ? (
        Normalize<(T extends readonly unknown[] ? T[number] : never)>[]
    ) : T
)

export type { Normalize as ZuordNormalize };