import { InternalZuord } from "./index";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";

export type Normalize<T, Options extends NormalizeOptions = NormalizeDefaultOptions> = [ZuordTrait.Eq<T, any>] extends [false] ? (
    [ZuordTrait.Has<T, ZuordType.Tuple>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Tuple> extends infer TExcluded ? Normalize<TExcluded, Options> : never) |
        (ZuordTrait.Extract<T, ZuordType.Tuple> extends infer TExtracted ? ({  
            [K in keyof TExtracted]: Normalize<TExtracted[K], Options> 
        }) : never )
    ) :
    [ZuordTrait.Has<T, ZuordType.Array>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Array> extends infer TExcluded ? Normalize<TExcluded, Options> : never) |
        (ZuordTrait.Extract<T, ZuordType.Array> extends infer TExtracted ? Normalize<Extract<TExtracted, readonly unknown[]>[number], Options>[] : never)
    ) :     
    [ZuordTrait.Has<T, ZuordType.Plain>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Plain> extends infer TExcluded ? Normalize<TExcluded, Options> : never) | 
        (ZuordTrait.Extract<T, ZuordType.Plain> extends infer TExtracted ? ({
            [K in keyof TExtracted]: Normalize<TExtracted[K], Options>;
        }) : never )
    ) : T
) : any;

export type NormalizeOptions = InternalZuord.Options

export type NormalizeDefaultOptions = InternalZuord.DefaultOptions;

export type NormalizeResolveOptions<T extends Partial<NormalizeOptions>> = Omit<NormalizeDefaultOptions, keyof T>;