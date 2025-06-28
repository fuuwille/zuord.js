import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Impose<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeRaw<TBase, TPatch, TCurrent>>;

type ImposeRaw<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = ImposeLooseRaw<TBase, TPatch, TCurrent>;

type ImposeLoose<TBase, TPatch, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeLooseRaw<TBase, TPatch, TCurrent>>;

type ImposeLooseRaw<TBase, TPatch, TCurrent extends TBase = TBase> = [ZuordUtil.IsNever<TPatch>] extends [false] ? (
    ZuordUtil.IsPlain<TBase> extends true ? ({
        [K in keyof TBase]: ImposeLooseRaw<
        TBase[K],  
        (K extends keyof ZuordUtil.AsNonUndefined<TPatch> ? ZuordUtil.AsNonUndefined<TPatch>[K] : TCurrent[K]),
        TCurrent[K]>
    }) : [ZuordUtil.IsUndefined<TPatch>] extends [true] ? TCurrent : NonNullable<TPatch>
) : TCurrent;

export type { Impose as ZuordImpose };
export type { ImposeRaw as ZuordImposeRaw };
export type { ImposeLoose as ZuordImposeLoose };
export type { ImposeLooseRaw as ZuordImposeLooseRaw };