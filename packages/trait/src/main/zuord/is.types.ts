import { $TypeTrait } from "../../internal";

export type Base<TSource extends unknown, TBase extends unknown> = $TypeTrait.Is.Base<TSource, TBase>;

export type Any<TSources extends unknown[], TBase extends unknown> = $TypeTrait.Is.Any<TSources, TBase>;

export type Every<TSources extends unknown[], TBase extends unknown> = $TypeTrait.Is.Every<TSources, TBase>;

export type Some<TSource extends unknown, TBases extends unknown[]> = $TypeTrait.Is.Some<TSource, TBases>;

export type Each<TSource extends unknown, TBases extends unknown[]> = $TypeTrait.Is.Each<TSource, TBases>;

export type AnySome<TSources extends unknown[], TBases extends unknown[]> = $TypeTrait.Is.AnySome<TSources, TBases>;

export type AnyEach<TSources extends unknown[], TBases extends unknown[]> = $TypeTrait.Is.AnyEach<TSources, TBases>;

export type EverySome<TSources extends unknown[], TBases extends unknown[]> = $TypeTrait.Is.EverySome<TSources, TBases>;

export type EveryEach<TSources extends unknown[], TBases extends unknown[]> = $TypeTrait.Is.EveryEach<TSources, TBases>;