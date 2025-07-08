import { Zuord } from "@/core/alias.types";
import { ZuordTrait } from "@/trait/_alias.types";
import { ZuordType } from "@/type/_alias.types";
import { ZuordUtil } from "@/util/_alias.types";

type Impose<TBase, TPatch extends Zuord.Optional<TBase>, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeBase<TBase, TPatch, TCurrent>>;

type ImposeBase<TBase, TPatch extends Zuord.Optional<TBase>, TCurrent extends TBase = TBase> = ImposeLooseBase<TBase, TPatch, TCurrent>;

type ImposeLoose<TBase, TPatch, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeLooseBase<TBase, TPatch, TCurrent>>;

type ImposeLooseBase<TBase, TPatch, TCurrent extends TBase = TBase> = [ZuordTrait.Is<TPatch, never>] extends [false] ? (
    [ZuordUtil.Is<TBase, ZuordType.Plain>] extends [true] ? ({
        [K in keyof TBase]: ImposeLooseBase<
        TBase[K],  
        (K extends keyof ZuordTrait.ExcludeExact<TPatch, undefined> ? ZuordTrait.ExcludeExact<TPatch, undefined>[K] : TCurrent[K]),
        TCurrent[K]>
    }) : (
        [ZuordUtil.EqToAny<TPatch, [undefined, never]>] extends [true] ? (
            [ZuordUtil.EqToAny<TCurrent, [undefined, never]>] extends [true] ? TPatch : TCurrent
        ) : ZuordTrait.ExcludeExact<TPatch, undefined>
    )
) : TCurrent;

export type { Impose as ZuordImpose };
export type { ImposeBase as ZuordImposeBase };
export type { ImposeLoose as ZuordImposeLoose };
export type { ImposeLooseBase as ZuordImposeLooseBase };