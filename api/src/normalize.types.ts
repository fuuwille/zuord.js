import { Zuord } from "./alias.types";
import { ZuordType } from "./type/_alias.types";
import { ZuordUtil } from "./util/_alias.types";

type Normalize<T, Options extends NormalizeOptions = NormalizeDefaultOptions> = [ZuordUtil.Eq<T, any>] extends [false] ? (
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

type NormalizeOptions = Zuord.Options

type NormalizeDefaultOptions = Zuord.DefaultOptions;

type NormalizeResolveOptions<T extends Partial<NormalizeOptions>> = Omit<NormalizeDefaultOptions, keyof T>;

export type { Normalize as ZuordNormalize };
export type { NormalizeOptions as ZuordNormalizeOptions };
export type { NormalizeDefaultOptions as ZuordNormalizeDefaultOptions };
export type { NormalizeResolveOptions as ZuordNormalizeResolveOptions };