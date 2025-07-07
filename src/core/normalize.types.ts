import { Zuord } from "@/core/alias.types";
import { ZuordTrait } from "@/trait/_alias.types";
import { ZuordType } from "@/type/_alias.types";

type Normalize<T, Options extends NormalizeOptions = NormalizeDefaultOptions> = [ZuordTrait.HasOutcasts<T, Options["outcasts"]>] extends [false]? (
    [ZuordTrait.HasPlain<T>] extends [true] ? (
        (ZuordTrait.ExcludePlain<T> extends infer TExcluded ? Normalize<TExcluded, Options> : unknown) | 
        (ZuordTrait.ExtractPlain<T> extends infer TExtracted ? ({
            [K in keyof TExtracted]: Normalize<TExtracted[K], Options>;
        }) : never )
    ) : 
    [ZuordTrait.HasTuple<T>] extends [true] ? (
        (ZuordTrait.ExcludeTuple<T> extends infer TExcluded ? Normalize<TExcluded, Options> : unknown) |
        (ZuordTrait.ExtractTuple<T> extends infer TExtracted ? ({  
            [K in keyof TExtracted]: Normalize<TExtracted[K], Options> 
        }) : never )
    ) :
    [ZuordTrait.Has<T, ZuordType.Array>] extends [true] ? (
        (ZuordTrait.Exclude<T, ZuordType.Array > extends infer TExcluded ? Normalize<TExcluded, Options> : unknown) |
        (ZuordTrait.Extract<T, ZuordType.Array> extends infer TExtracted ? Normalize<Extract<TExtracted, readonly unknown[]>[number], Options>[] : never)
    ) : T
) : (
    ZuordTrait.ExcludeOutcasts<T, Options["outcasts"]> extends infer TExcluded
        ? ZuordTrait.ExtractOutcasts<T, Options["outcasts"]> extends infer TExtracted
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