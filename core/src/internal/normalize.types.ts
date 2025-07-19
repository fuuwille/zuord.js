import { Zuord } from "./index";
import { ZuordType } from "@zuord/type";
import { ZuordUtil } from "@zuord/util";

export type Normalize<T, Options extends NormalizeOptions = NormalizeDefaultOptions> = [ZuordUtil.Eq<T, any>] extends [false] ? (
    [ZuordUtil.Has<T, ZuordType.Tuple>] extends [true] ? (
        (ZuordUtil.Exclude<T, ZuordType.Tuple> extends infer TExcluded ? Normalize<TExcluded, Options> : never) |
        (ZuordUtil.Extract<T, ZuordType.Tuple> extends infer TExtracted ? ({  
            [K in keyof TExtracted]: Normalize<TExtracted[K], Options> 
        }) : never )
    ) :
    [ZuordUtil.Has<T, ZuordType.Array>] extends [true] ? (
        (ZuordUtil.Exclude<T, ZuordType.Array> extends infer TExcluded ? Normalize<TExcluded, Options> : never) |
        (ZuordUtil.Extract<T, ZuordType.Array> extends infer TExtracted ? Normalize<Extract<TExtracted, readonly unknown[]>[number], Options>[] : never)
    ) :     
    [ZuordUtil.Has<T, ZuordType.Plain>] extends [true] ? (
        (ZuordUtil.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Normalize<TExcluded, Options> : never) | 
        (ZuordUtil.Extract<T, ZuordType.Plain> extends infer TExtracted ? ({
            [K in keyof TExtracted]: Normalize<TExtracted[K], Options>;
        }) : never )
    ) : T
) : any;

export type NormalizeOptions = Zuord.Options

export type NormalizeDefaultOptions = Zuord.DefaultOptions;

export type NormalizeResolveOptions<T extends Partial<NormalizeOptions>> = Omit<NormalizeDefaultOptions, keyof T>;