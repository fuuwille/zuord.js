import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";
import { ZuordCore } from "@zuord/core";

export type Normalize<T, TMode extends NormalizeBaseMode> = [ZuordTrait.Eq<T, any>] extends [false] ? (
    [ZuordTrait.Has<T, ZuordType.Tuple>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Tuple> extends infer TExcluded ? Normalize<TExcluded, TMode> : never) |
        (ZuordTrait.Extract<T, ZuordType.Tuple> extends infer TExtracted ? NormalizeTuple<TExtracted, TMode> : never )
    ) :
    [ZuordTrait.Has<T, ZuordType.Array>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Array> extends infer TExcluded ? Normalize<TExcluded, TMode> : never) |
        (ZuordTrait.Extract<T, ZuordType.Array> extends infer TExtracted ? NormalizeArray<TExtracted, TMode> : never)
    ) :     
    [ZuordTrait.Has<T, ZuordType.Plain>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Normalize<TExcluded, TMode> : never) | 
        (ZuordTrait.Extract<T, ZuordType.Plain> extends infer TExtracted ? NormalizePlain<TExtracted, TMode> : never )
    ) : T
) : any;

export type NormalizeTuple<T, TMode extends NormalizeBaseMode> = T extends ZuordType.Tuple ? {
    [K in keyof T]: Normalize<T[K], TMode> 
} : never;

export type NormalizeArray<T, TMode extends NormalizeBaseMode> = T extends ZuordType.Array ? (
    Normalize<T[number], TMode>[]
) : never;

export type NormalizePlain<T, TMode extends NormalizeBaseMode> = T extends ZuordType.Plain ? {
    [K in T extends any ? keyof T : never]: K extends keyof T ? Normalize<T[K], TMode> : never;
} : never;

export type NormalizeBaseMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode]>;

export type NormalizeDefaultMode = ZuordCore.BaseMode;