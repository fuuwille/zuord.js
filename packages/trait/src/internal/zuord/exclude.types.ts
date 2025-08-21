import { $ZuordTrait } from "..";

export declare namespace Exclude {
    export type Is<TSource, TBase> = TSource extends any ? (
        [$ZuordTrait.Is.Base<TSource, TBase>] extends [false] ? TSource : never
    ) : never;

    export type IsEach<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
        Exclude.IsEach<Exclude.Is<TSource, TBase>, TBaseRest>
    ) : TSource;

    export type Eq<TSource, TBase> = TSource extends any ? (
        [$ZuordTrait.Eq.Both<TSource, TBase>] extends [false] ? TSource : never
    ) : never;

    export type EqEach<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
        Exclude.EqEach<Exclude.Eq<TSource, TBase>, TBaseRest>
    ) : TSource;
}