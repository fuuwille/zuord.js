import { Zuord } from "@/core/alias.types";
import { ZuordTrait } from "@/trait/_alias.types";
import { ZuordType } from "@/type/_alias.types";

type Impose<TBase, TPatch extends Zuord.Optional<TBase>, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeBase<TBase, TPatch, TCurrent>>;

type ImposeBase<TBase, TPatch extends Zuord.Optional<TBase>, TCurrent extends TBase = TBase> = ImposeLooseBase<TBase, TPatch, TCurrent>;

type ImposeLoose<TBase, TPatch, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeLooseBase<TBase, TPatch, TCurrent>>;

type ImposeLooseBase<TBase, TPatch, TCurrent extends TBase = TBase> = [ZuordTrait.Is<TPatch, never>] extends [false] ? (
    [ZuordTrait.Is<TBase, ZuordType.Plain>] extends [true] ? ({
        [K in keyof TBase]: ImposeLooseBase<
        TBase[K],  
        (K extends keyof ZuordTrait.ExcludeExact<TPatch, undefined> ? ZuordTrait.ExcludeExact<TPatch, undefined>[K] : TCurrent[K]),
        TCurrent[K]>
    }) : (
        [ZuordTrait.Eq<TPatch, undefined>] extends [true] ? (
            [ZuordTrait.Is<TCurrent, undefined>] extends [true] ? TPatch : TCurrent
        ) : ZuordTrait.ExcludeExact<TPatch, undefined>
    )
) : TCurrent;

export type { Impose as ZuordImpose };
export type { ImposeBase as ZuordImposeBase };
export type { ImposeLoose as ZuordImposeLoose };
export type { ImposeLooseBase as ZuordImposeLooseBase };