import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, Options extends NormalizeOptions = NormalizeDefaultOptions> = [ZuordUtil.HasOutcasts<T, Options["outcasts"]>] extends [false]? (
    [ZuordUtil.HasPlain<T>] extends [true] ? (
        (ZuordUtil.AsNonPlain<T> extends infer T ? Normalize<T, Options> : never) | 
        ([Options["mode"]["lite"]] extends [true] ? ZuordUtil.AsPlain<T> : (ZuordUtil.AsOnePlain<T> extends infer T ? { [K in keyof T]: Normalize<T[K], Options> } : never))
    ) : 
    [ZuordUtil.HasArray<T>] extends [true] ? (
        (ZuordUtil.AsNonArray<T> extends infer T ? Normalize<T, Options> : never) |
        ([Options["mode"]["lite"]] extends [true] ? ZuordUtil.AsArray<T>: Normalize<Extract<ZuordUtil.AsOneArray<T>, readonly unknown[]>[number], Options>[])
    ) : T
) : Normalize<ZuordUtil.AsNonOutcasts<T, Options["outcasts"]>, Options> | ZuordUtil.AsOutcasts<T, Options["outcasts"]>;

type NormalizeOptions = Zuord.Options

type NormalizeDefaultOptions = Zuord.DefaultOptions;

type NormalizeResolveOptions<T extends Partial<NormalizeOptions>> = Omit<NormalizeDefaultOptions, keyof T> & T;

export type { Normalize as ZuordNormalize };
export type { NormalizeOptions as ZuordNormalizeOptions };
export type { NormalizeDefaultOptions as ZuordNormalizeDefaultOptions };
export type { NormalizeResolveOptions as ZuordNormalizeResolveOptions };