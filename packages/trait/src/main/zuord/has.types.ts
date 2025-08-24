import { $ZuordTrait } from "../../internal";

export type Base<TSource extends unknown, TBase extends unknown> = $ZuordTrait.Has.Base<TSource, TBase>;

export type Any<TSources extends unknown[], TBase extends unknown> = $ZuordTrait.Has.Any<TSources, TBase>;

export type Every<TSources extends unknown[], TBase extends unknown> = $ZuordTrait.Has.Every<TSources, TBase>;

export type Some<TSource extends unknown, TBases extends unknown[]> = $ZuordTrait.Has.Some<TSource, TBases>;

export type Each<TSource extends unknown, TBases extends unknown[]> = $ZuordTrait.Has.Each<TSource, TBases>;

export type AnySome<TSources extends unknown[], TBases extends unknown[]> = $ZuordTrait.Has.AnySome<TSources, TBases>;

export type AnyEach<TSources extends unknown[], TBases extends unknown[]> = $ZuordTrait.Has.AnyEach<TSources, TBases>;

export type EverySome<TSources extends unknown[], TBases extends unknown[]> = $ZuordTrait.Has.EverySome<TSources, TBases>;

export type EveryEach<TSources extends unknown[], TBases extends unknown[]> = $ZuordTrait.Has.EveryEach<TSources, TBases>;