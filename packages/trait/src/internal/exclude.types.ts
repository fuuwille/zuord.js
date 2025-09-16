import { $TypeTrait } from ".";

export type Is<TSource, TBase> = TSource extends any ? (
    [$TypeTrait.Is.Base<TSource, TBase>] extends [false] ? TSource : never
) : never;

export type IsEach<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
    IsEach<Is<TSource, TBase>, TBaseRest>
) : TSource;

export type Eq<TSource, TBase> = TSource extends any ? (
    [$TypeTrait.Eq.Both<TSource, TBase>] extends [false] ? TSource : never
) : never;

export type EqEach<TSource, TBases> = TBases extends [infer TBase, ...infer TBaseRest] ? (
    EqEach<Eq<TSource, TBase>, TBaseRest>
) : TSource;