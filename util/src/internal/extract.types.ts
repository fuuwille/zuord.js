import { InternalZuordUtil } from ".";


// EXTRACT

type Extract<TSource, TBase> = TSource extends any ? (
    [InternalZuordUtil.Is<TSource, TBase>] extends [true] ? TSource : never
) : never;

export type { Extract as ZuordExtract };


// EXTRACT EACH

type ExtractEach<TSource, TBases> = TBases extends [infer TBase, ...infer TRestBases] ? (
    ExtractEach<Extract<TSource, TBase>, TRestBases>
) : TSource;

export type { ExtractEach as ZuordExtractEach };


// EXTRACT EQ

type ExtractEq<TSource, TBase> = TSource extends any ? (
    [InternalZuordUtil.Eq<TSource, TBase>] extends [true] ? TSource : never
) : never;

export type { ExtractEq as ZuordExtractEq };