import { Zuord } from "../core/alias.types";
import { ZuordType } from "../type/_alias.types";
import { ZuordUtil } from "../util/_alias.types";

type Impose<TBase, TPatch extends Zuord.Optional<TBase>, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeBase<TBase, TPatch, TCurrent>>;

type ImposeBase<TBase, TPatch extends Zuord.Optional<TBase>, TCurrent extends TBase = TBase> = ImposeLooseBase<TBase, TPatch, TCurrent>;

type ImposeLoose<TBase, TPatch, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeLooseBase<TBase, TPatch, TCurrent>>;

type ImposeLooseBase<TBase, TPatch, TCurrent extends TBase = TBase> = [ZuordUtil.Is<TPatch, never>] extends [false] ? (
    [ZuordUtil.Is<TBase, ZuordType.Plain>] extends [true] ? ({
        [K in keyof TBase]: ImposeLooseBase<TBase[K], NonNullable<TPatch> extends infer TInfer ?
            (K extends keyof TInfer ? TInfer[K] : TCurrent[K]) : never, TCurrent[K]>
    }) : (
        [ZuordUtil.EqSome<TPatch, [undefined, never]>] extends [true] ? (
            [ZuordUtil.EqSome<TCurrent, [undefined, never]>] extends [true] ? TPatch : TCurrent
        ) : ZuordUtil.ExcludeEq<TPatch, undefined>
    )
) : TCurrent;

export type { Impose as ZuordImpose };
export type { ImposeBase as ZuordImposeBase };
export type { ImposeLoose as ZuordImposeLoose };
export type { ImposeLooseBase as ZuordImposeLooseBase };