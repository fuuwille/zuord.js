import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/_alias.types";

type Normalize<T, Options extends NormalizeOptions = NormalizeDefaultOptions> = [ZuordUtil.HasOutcasts<T, Options["outcasts"]>] extends [false]? (
    [ZuordUtil.HasPlain<T>] extends [true] ? (
        (ZuordUtil.ExcludePlain<T> extends infer TExcluded ? Normalize<TExcluded, Options> : unknown) | 
        (ZuordUtil.ExtractPlain<T> extends infer TExtracted ? ({
            [K in keyof TExtracted]: Normalize<TExtracted[K], Options>;
        }) : never )
    ) : 
    [ZuordUtil.HasTuple<T>] extends [true] ? (
        (ZuordUtil.ExcludeTuple<T> extends infer TExcluded ? Normalize<TExcluded, Options> : unknown) |
        (ZuordUtil.ExtractTuple<T> extends infer TExtracted ? ({  
            [K in keyof TExtracted]: Normalize<TExtracted[K], Options> 
        }) : never )
    ) :
    [ZuordUtil.HasArray<T>] extends [true] ? (
        (ZuordUtil.ExcludeArray<T> extends infer TExcluded ? Normalize<TExcluded, Options> : unknown) |
        (ZuordUtil.ExtractArray<T> extends infer TExtracted ? Normalize<Extract<TExtracted, readonly unknown[]>[number], Options>[] : never)
    ) : T
) : (
    ZuordUtil.ExcludeOutcasts<T, Options["outcasts"]> extends infer TExcluded
        ? ZuordUtil.ExtractOutcasts<T, Options["outcasts"]> extends infer TExtracted
            ? Normalize<TExcluded, Options> | TExtracted
            : never
    : never
)

type NormalizeOptions = Zuord.Options

type NormalizeDefaultOptions = Zuord.DefaultOptions;

type NormalizeResolveOptions<T extends Partial<NormalizeOptions>> = Omit<NormalizeDefaultOptions, keyof T>;

export type { Normalize as ZuordNormalize };
export type { NormalizeOptions as ZuordNormalizeOptions };
export type { NormalizeDefaultOptions as ZuordNormalizeDefaultOptions };
export type { NormalizeResolveOptions as ZuordNormalizeResolveOptions };