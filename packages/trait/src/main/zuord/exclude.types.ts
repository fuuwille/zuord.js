import { $TypeTrait } from "../../internal";

export type Is<TSource extends unknown, TExclude extends unknown> = $TypeTrait.Exclude.Is<TSource, TExclude>;

export type IsEach<TSource extends unknown, TExcludes extends unknown[]> = $TypeTrait.Exclude.IsEach<TSource, TExcludes>;

export type Eq<TSource extends unknown, TExclude extends unknown> = $TypeTrait.Exclude.Eq<TSource, TExclude>;

export type EqEach<TSource extends unknown, TExcludes extends unknown[]> = $TypeTrait.Exclude.EqEach<TSource, TExcludes>;