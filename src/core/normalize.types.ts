import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, Options extends NormalizeOptions = NormalizeDefaultOptions> = [ZuordUtil.HasOutcasts<T, Options["outcasts"]>] extends [false]? (
    [ZuordUtil.HasPlain<T>] extends [true] ? (
        (ZuordUtil.AsNonPlain<T> extends infer TNonPlain ? Normalize<TNonPlain, Options> : unknown) | 
        ({
            [K in keyof ZuordUtil.ToPlainWithOptions<T, Options>]: Normalize<ZuordUtil.ToPlainWithOptions<T, Options>[K], Options>;
        })
    ) : 
    [ZuordUtil.HasArray<T>] extends [true] ? (
        (ZuordUtil.AsNonArray<T> extends infer TNonArray ? Normalize<TNonArray, Options> : unknown) |
        (
            [Options["mode"]["lite"]] extends [true] ? (
                ZuordUtil.AsArray<T> extends infer TArray ? { 
                    [K in keyof TArray]: Normalize<TArray[K], Options> 
                } : unknown
            ) : Normalize<Extract<ZuordUtil.AsOneArray<T>, readonly unknown[]>[number], Options>[])
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