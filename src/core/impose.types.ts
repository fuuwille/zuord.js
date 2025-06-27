import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Impose<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeRaw<TBase, TPatch, TCurrent>>;

type ImposeRaw<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = [ZuordUtil.IsNever<TPatch>] extends [false] ? (
    ZuordUtil.IsPlain<TBase> extends true ? ({
        [K in keyof TBase]: K extends keyof TPatch ? (
            TCurrent[K] extends object ? (TPatch[K] extends object ? (
                ImposeRaw<TBase[K], TPatch[K], TCurrent[K]>
            ) : TCurrent[K] ) : TPatch[K]
        ) : TCurrent[K];
    }) : TPatch
) : TCurrent;

export type { Impose as ZuordImpose };
export type { ImposeRaw as ZuordImposeRaw };