import { Zuord } from "@/core/alias.types";
import { ZuordTrait } from "@/trait/_alias.types";

type Impose<TBase, TPatch extends Zuord.Optional<TBase>, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeBase<TBase, TPatch, TCurrent>>;

type ImposeBase<TBase, TPatch extends Zuord.Optional<TBase>, TCurrent extends TBase = TBase> = ImposeLooseBase<TBase, TPatch, TCurrent>;

type ImposeLoose<TBase, TPatch, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeLooseBase<TBase, TPatch, TCurrent>>;

type ImposeLooseBase<TBase, TPatch, TCurrent extends TBase = TBase> = [ZuordTrait.IsNever<TPatch>] extends [false] ? (
    ZuordTrait.IsPlain<TBase> extends true ? ({
        [K in keyof TBase]: ImposeLooseBase<
        TBase[K],  
        (K extends keyof ZuordTrait.ExcludeExactUndefined<TPatch> ? ZuordTrait.ExcludeExactUndefined<TPatch>[K] : TCurrent[K]),
        TCurrent[K]>
    }) : (
        [ZuordTrait.EqUndefined<TPatch>] extends [true] ? (
            ZuordTrait.IsUndefined<TCurrent> extends true ? TPatch : TCurrent
        ) : ZuordTrait.ExcludeExactUndefined<TPatch>
    )
) : TCurrent;

export type { Impose as ZuordImpose };
export type { ImposeBase as ZuordImposeBase };
export type { ImposeLoose as ZuordImposeLoose };
export type { ImposeLooseBase as ZuordImposeLooseBase };