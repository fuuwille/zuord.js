import { $ZuordTrait } from "../../internal";

export type Is<TSource extends unknown, TExclude extends unknown> = $ZuordTrait.Exclude.Is<TSource, TExclude>;

export type IsEach<TSource extends unknown, TExcludes extends unknown[]> = $ZuordTrait.Exclude.IsEach<TSource, TExcludes>;

export type Eq<TSource extends unknown, TExclude extends unknown> = $ZuordTrait.Exclude.Eq<TSource, TExclude>;

export type EqEach<TSource extends unknown, TExcludes extends unknown[]> = $ZuordTrait.Exclude.EqEach<TSource, TExcludes>;