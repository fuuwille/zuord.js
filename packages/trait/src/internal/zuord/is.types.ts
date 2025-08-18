import { ZuordArray } from "@zuord/type";

export namespace Is {
    export type Base<TSource, TBase> = [TSource] extends [TBase] ? (
        [TSource] extends [never] ? ([TBase] extends [never] ? true : false) : true
    ) : false;

    export type Any<TSources, TBase> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Is.Base<TSource, TBase>] extends [true] ? true : Is.Any<TSourceRest, TBase>
    ) : false;

    export type Every<TSources, TBase> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Is.Base<TSource, TBase>] extends [true] ? (TSourceRest extends ZuordArray.Empty ? true : Is.Every<TSourceRest, TBase>) : false
    ) : false;

    export type Some<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
        [Is.Base<TSource, TBase>] extends [true] ? true : Is.Some<TSource, TBaseRest>
    ) : false;

    export type Each<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
        [Is.Base<TSource, TBase>] extends [true] ? (TBaseRest extends ZuordArray.Empty ? true : Is.Each<TSource, TBaseRest>) : false
    ) : false;

    export type AnySome<TSources, TBases> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Is.Some<TSource, TBases>] extends [true] ? true : Is.AnySome<TSourceRest, TBases>
    ) : false;
}