import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Impose<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeRaw<TBase, TPatch, TCurrent>>;

type ImposeRaw<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = [ZuordUtil.IsNever<TPatch>] extends [false] ? (
    ZuordUtil.HasPlain<TBase> extends true ? ({
        [K in keyof TBase]: TPatch[K] extends undefined
            ? TCurrent[K]
            : ZuordUtil.AsNonUndefined<TPatch[K]> extends ZuordUtil.Optional<TBase[K]>
                ? ImposeRaw<TBase[K], ZuordUtil.AsNonUndefined<TPatch[K]>, TCurrent[K]>
                : K extends keyof TPatch[K] ? TPatch[K] : TCurrent[K];
    }) : TPatch
) : TCurrent;

export type { Impose as ZuordImpose };
export type { ImposeRaw as ZuordImposeRaw };