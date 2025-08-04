import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";

export type Normalize<T, TMode> = (
    [ZuordTrait.Eq<T, any>] extends [true] ? any :
    [ZuordTrait.Is<T, ZuordType.Primitive>] extends [true] ? T :
    [ZuordTrait.Has<T, ZuordType.Plain>] extends [true] ? (
        | (ZuordTrait.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Normalize<TExcluded, TMode> : never) 
        | (ZuordTrait.Extract<T, ZuordType.Plain> extends infer TExtracted extends ZuordType.Plain ? NormalizePlain<TExtracted, TMode> : never)
    ) : 
    [ZuordTrait.Has<T, ZuordType.Tuple>] extends [true] ? (
        | (ZuordTrait.Exclude<T, ZuordType.Tuple> extends infer TExcluded ? Normalize<TExcluded, TMode> : never)
        | (ZuordTrait.Extract<T, ZuordType.Tuple> extends infer TExtracted extends ZuordType.Tuple ? NormalizeTuple<TExtracted, TMode> : never )
    ) :
    [ZuordTrait.Has<T, ZuordType.Array>] extends [true] ? (
        | (ZuordTrait.Exclude<T, ZuordType.Array> extends infer TExcluded ? Normalize<TExcluded, TMode> : never)
        | (ZuordTrait.Extract<T, ZuordType.Array> extends infer TExtracted extends ZuordType.Array ? NormalizeArray<TExtracted, TMode> : never )
    ) : T
)

export type NormalizePlain<T extends ZuordType.Plain, TMode> = {
    [K in T extends any ? keyof T : never]: T extends any ? K extends keyof T ? T[K] : never : never;
} extends infer V extends ZuordType.Plain ? { [K in keyof V]: Normalize<V[K], TMode> }: never

export type NormalizeTuple<T extends ZuordType.Tuple, TMode> = ({
    [K in keyof T]: Normalize<T[K], TMode> 
}) extends infer TNormalized extends ZuordType.Tuple ? TNormalized : never;

export type NormalizeArray<T extends ZuordType.Array, TMode> = (
    Normalize<T[number], TMode>[]
) extends infer TNormalized extends ZuordType.Array ? TNormalized : never;