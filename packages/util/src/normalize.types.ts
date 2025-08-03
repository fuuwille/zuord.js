import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";

export type Normalize<T, TMode> = [ZuordTrait.Eq<T, any>] extends [false] ? (
    [ZuordTrait.Has<T, ZuordType.Tuple>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Tuple> extends infer TExcluded ? Normalize<TExcluded, TMode> : never) |
        (ZuordTrait.Extract<T, ZuordType.Tuple> extends infer TExtracted extends ZuordType.Tuple ? {
            [K in keyof TExtracted]: Normalize<TExtracted[K], TMode> 
        } : never )
    ) :
    [ZuordTrait.Has<T, ZuordType.Array>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Array> extends infer TExcluded ? Normalize<TExcluded, TMode> : never) |
        (ZuordTrait.Extract<T, ZuordType.Array> extends infer TExtracted extends ZuordType.Array ? (
            Normalize<TExtracted[number], TMode>[]
        ) : never )
    ) :     
    [ZuordTrait.Has<T, ZuordType.Plain>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Normalize<TExcluded, TMode> : never) | 
        (ZuordTrait.Extract<T, ZuordType.Plain> extends infer TExtracted extends ZuordType.Plain ? {
            [K in TExtracted extends any ? keyof TExtracted : never]: TExtracted extends any ? K extends keyof TExtracted ? TExtracted[K] : never : never;
        } extends infer TTO ? {
            [K in keyof TTO]: Normalize<TTO[K], TMode>;
        } : never: never )
    ) : T
) : any;