import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, Options extends NormalizeOptions = NormalizeDefaultOptions> = [ZuordUtil.HasOutcasts<T, Options["outcasts"]>] extends [false]? (
    [ZuordUtil.HasPlain<T>] extends [true] ? (
        (ZuordUtil.AsNonPlain<T> extends infer TNonPlain ? Normalize<TNonPlain, Options> : unknown) | 
        (ZuordUtil.AsPlain<T> extends infer TPlain ? ({
            [K in keyof TPlain]: Normalize<TPlain[K], Options>;
        }) : never )
    ) : 
    [ZuordUtil.HasTuple<T>] extends true ? (
        (ZuordUtil.ExcludeTuple<T> extends infer TExcluded ? Normalize<TExcluded, Options> : unknown) |
        (ZuordUtil.ExtractTuple<T> extends infer TExtracted ? ({  
            [K in keyof TExtracted]: Normalize<TExtracted[K], Options> 
        }) : never )
    ) :
    [ZuordUtil.HasArray<T>] extends [true] ? (
        (ZuordUtil.AsNonArray<T> extends infer TNonArray ? Normalize<TNonArray, Options> : unknown) |
        (              
            ZuordUtil.AsArray<T> extends infer TArray ? (
                [Options["mode"]["lite"]] extends [true] ? (
                    {  [K in keyof TArray]: Normalize<TArray[K], Options> }
                ) : Normalize<Extract<TArray, readonly unknown[]>[number], Options>[]
            ) : never
        )
    ) : T
) : (
    ZuordUtil.AsNonOutcasts<T, Options["outcasts"]> extends infer TNonOutcasts
        ? ZuordUtil.AsOutcasts<T, Options["outcasts"]> extends infer TOutcasts
            ? Normalize<TNonOutcasts, Options> | TOutcasts
            : unknown
    : unknown
)

type NormalizeOptions = Zuord.Options

type NormalizeDefaultOptions = Zuord.DefaultOptions;

type NormalizeResolveOptions<T extends Partial<NormalizeOptions>> = Omit<NormalizeDefaultOptions, keyof T>;

export type { Normalize as ZuordNormalize };
export type { NormalizeOptions as ZuordNormalizeOptions };
export type { NormalizeDefaultOptions as ZuordNormalizeDefaultOptions };
export type { NormalizeResolveOptions as ZuordNormalizeResolveOptions };