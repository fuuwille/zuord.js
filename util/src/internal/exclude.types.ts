import { InternalZuordUtil } from ".";


// EXCLUDE

type Exclude<TSource, TBase> = TSource extends any ? (
    [InternalZuordUtil.Is<TSource, TBase>] extends [false] ? TSource : never
) : never;

export type { Exclude as ZuordExclude };


// EXCLUDE EACH

type ExcludeEach<TSource, TBases> = TBases extends [infer TBase, ...infer TRestBases] ? (
    ExcludeEach<Exclude<TSource, TBase>, TRestBases>
) : TSource;

export type { ExcludeEach as ZuordExcludeEach };