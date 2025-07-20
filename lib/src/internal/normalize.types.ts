import { InternalZuord } from "./index";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";
import { ZuordCore } from "@zuord/core";

export type Normalize<T, TMode extends NormalizeBaseMode = NormalizeDefaultMode> = [ZuordTrait.Eq<T, any>] extends [false] ? (
    [ZuordTrait.Has<T, ZuordType.Tuple>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Tuple> extends infer TExcluded ? Normalize<TExcluded, TMode> : never) |
        (ZuordTrait.Extract<T, ZuordType.Tuple> extends infer TExtracted ? ({  
            [K in keyof TExtracted]: Normalize<TExtracted[K], TMode> 
        }) : never )
    ) :
    [ZuordTrait.Has<T, ZuordType.Array>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Array> extends infer TExcluded ? Normalize<TExcluded, TMode> : never) |
        (ZuordTrait.Extract<T, ZuordType.Array> extends infer TExtracted ? Normalize<Extract<TExtracted, readonly unknown[]>[number], TMode>[] : never)
    ) :     
    [ZuordTrait.Has<T, ZuordType.Plain>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Normalize<TExcluded, TMode> : never) | 
        (ZuordTrait.Extract<T, ZuordType.Plain> extends infer TExtracted ? ({
            [K in keyof TExtracted]: Normalize<TExtracted[K], TMode>;
        }) : never )
    ) : T
) : any;

export type NormalizeBaseMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode]>;

export type NormalizeDefaultMode = ZuordCore.BaseMode;