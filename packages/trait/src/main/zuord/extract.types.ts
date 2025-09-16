import { $TypeTrait } from "../../internal";

export type Is<TSource extends unknown, TExtract extends unknown> = $TypeTrait.Extract.Is<TSource, TExtract>;

export type IsEach<TSource extends unknown, TExtracts extends unknown[]> = $TypeTrait.Extract.IsEach<TSource, TExtracts>;

export type Eq<TSource extends unknown, TExtract extends unknown> = $TypeTrait.Extract.Eq<TSource, TExtract>;

export type EqEach<TSource extends unknown, TExtracts extends unknown[]> = $TypeTrait.Extract.EqEach<TSource, TExtracts>;