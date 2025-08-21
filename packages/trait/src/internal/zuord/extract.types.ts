import { $ZuordTrait } from "..";

export declare namespace Extract {
    export type Is<TSource, TBase> = TSource extends any ? (
        [$ZuordTrait.Is.Base<TSource, TBase>] extends [true] ? TSource : never
    ) : never;

    export type IsEach<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
        Extract.IsEach<Extract.Is<TSource, TBase>, TBaseRest>
    ) : TSource;

    export type Eq<TSource, TBase> = TSource extends any ? (
        [$ZuordTrait.Eq.Both<TSource, TBase>] extends [true] ? TSource : never
    ) : never;

    export type EqEach<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
        Extract.EqEach<Extract.Eq<TSource, TBase>, TBaseRest>
    ) : TSource;
}