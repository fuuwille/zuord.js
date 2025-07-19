import { ZuordType } from "@zuord/type";
import { ZuordUtil } from "@zuord/util";

export type Impose<TBase, TPatch, TCurrent extends TBase> = ImposeLoose<TBase, TPatch, TCurrent>;

export type ImposeLoose<TBase, TPatch, TCurrent extends TBase> = [ZuordUtil.Is<TPatch, never>] extends [false] ? (
    [ZuordUtil.Is<TBase, ZuordType.Plain>] extends [true] ? ({
        [K in keyof TBase]: ImposeLoose<TBase[K], NonNullable<TPatch> extends infer TInfer ?
            (K extends keyof TInfer ? TInfer[K] : TCurrent[K]) : never, TCurrent[K]>
    }) : (
        [ZuordUtil.EqSome<TPatch, [undefined, never]>] extends [true] ? (
            [ZuordUtil.EqSome<TCurrent, [undefined, never]>] extends [true] ? TPatch : TCurrent
        ) : ZuordUtil.ExcludeEq<TPatch, undefined>
    )
) : TCurrent;