import { $ZuordTrait } from ".";
import { ZuordArray } from "@zuord/type";

export namespace Has {
    export type Base<TSource, TBase> = true extends (TSource extends any ? $ZuordTrait.Is.Base<TSource, TBase> : never) ? true : false;

    export type Any<TSources, TBase> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Has.Base<TSource, TBase>] extends [true] ? true : Has.Any<TSourceRest, TBase>
    ) : false;

    export type Every<TSources, TBase> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Has.Base<TSource, TBase>] extends [true] ? (TSourceRest extends ZuordArray.Empty ? true : Has.Every<TSourceRest, TBase>) : false
    ) : false;

    export type Some<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
        [Has.Base<TSource, TBase>] extends [true] ? true : Has.Some<TSource, TBaseRest>
    ) : false;

    export type Each<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
        [Has.Base<TSource, TBase>] extends [true] ? (TBaseRest extends ZuordArray.Empty ? true : Has.Each<TSource, TBaseRest>) : false
    ) : false;

    export type AnySome<TSources, TBases> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Has.Some<TSource, TBases>] extends [true] ? true : Has.AnySome<TSourceRest, TBases>
    ) : false;

    export type AnyEach<TSources, TBases> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Has.Each<TSource, TBases>] extends [true] ? true : Has.AnyEach<TSourceRest, TBases>
    ) : false;

    export type EverySome<TSources, TBases> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Has.Some<TSource, TBases>] extends [true] ? (TSourceRest extends ZuordArray.Empty ? true : Has.EverySome<TSourceRest, TBases>) : false
    ) : false;

    export type EveryEach<TSources, TBases> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Has.Each<TSource, TBases>] extends [true] ? (TSourceRest extends ZuordArray.Empty ? true : Has.EveryEach<TSourceRest, TBases>) : false
    ) : false;

}