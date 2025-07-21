import { ZuordType } from "../../../packages/type/src";
import { ZuordTrait } from "@zuord/trait";

export type Impose<TBase, TPatch, TCurrent extends TBase> = [ZuordTrait.Is<TPatch, never>] extends [false] ? (
    [ZuordTrait.Is<TBase, ZuordType.Plain>] extends [true] ? ({
        [K in keyof TBase]: Impose<TBase[K], NonNullable<TPatch> extends infer TInfer ?
            (K extends keyof TInfer ? TInfer[K] : TCurrent[K]) : never, TCurrent[K]>
    }) : (
        [ZuordTrait.EqSome<TPatch, [undefined, never]>] extends [true] ? (
            [ZuordTrait.EqSome<TCurrent, [undefined, never]>] extends [true] ? TPatch : TCurrent
        ) : ZuordTrait.ExcludeEq<TPatch, undefined>
    )
) : TCurrent;