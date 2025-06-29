import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/_alias.types";

type Impose<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeBase<TBase, TPatch, TCurrent>>;

type ImposeBase<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = ImposeLooseBase<TBase, TPatch, TCurrent>;

type ImposeLoose<TBase, TPatch, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeLooseBase<TBase, TPatch, TCurrent>>;

type ImposeLooseBase<TBase, TPatch, TCurrent extends TBase = TBase> = [ZuordUtil.IsNever<TPatch>] extends [false] ? (
    ZuordUtil.IsPlain<TBase> extends true ? ({
        [K in keyof TBase]: ImposeLooseBase<
        TBase[K],  
        (K extends keyof ZuordUtil.AsNonUndefined<TPatch> ? ZuordUtil.AsNonUndefined<TPatch>[K] : TCurrent[K]),
        TCurrent[K]>
    }) : (
        [ZuordUtil.EqUndefined<TPatch>] extends [true] ? (
            ZuordUtil.IsUndefined<TCurrent> extends true ? TPatch : TCurrent
        ) : ZuordUtil.AsNonUndefined<TPatch>
    )
) : TCurrent;

export type { Impose as ZuordImpose };
export type { ImposeBase as ZuordImposeBase };
export type { ImposeLoose as ZuordImposeLoose };
export type { ImposeLooseBase as ZuordImposeLooseBase };