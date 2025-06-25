import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Normalize<T, O extends NormalizeOptions = Zuord.DefaultOptions> = ZuordUtil.HasIgnored<T, O["ignored"]> extends false ? (
    ZuordUtil.HasPlain<T> extends true ? (
        (ZuordUtil.AsNonPlain<T> extends infer T ? Normalize<T, O> : never) | 
        (([O["lite"]] extends [true] ? ZuordUtil.AsPlain<T> : ZuordUtil.AsOnePlain<T>) extends infer T ? { [K in keyof T]: Normalize<T[K], O> } : never)
    ) : 
    ZuordUtil.HasArray<T> extends true ? (
        (ZuordUtil.AsNonArray<T> extends infer T ? Normalize<T, O> : never) |
        (([O["lite"]] extends [true] ? ZuordUtil.AsArray<T> : ZuordUtil.AsOneArray<T>) extends infer T ? Normalize<Extract<T, readonly unknown[]>[number], O>[] : never)
    ) : T
) : Normalize<ZuordUtil.AsNonIgnored<T, O["ignored"]>, O> | ZuordUtil.AsIgnored<T, O["ignored"]>;

type NormalizeOptions = Zuord.Options

export type { Normalize as ZuordNormalize };
export type { NormalizeOptions as ZuordNormalizeOptions };