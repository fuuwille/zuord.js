import { InternalZuordTrait } from ".";


// EXTRACT

type Extract<TSource, TBase> = TSource extends any ? (
    [InternalZuordTrait.Is<TSource, TBase>] extends [true] ? TSource : never
) : never;

export type { Extract as ZuordExtract };


// EXTRACT EACH

type ExtractEach<TSource, TBases> = TBases extends [infer TBase, ...infer TRestBases] ? (
    ExtractEach<Extract<TSource, TBase>, TRestBases>
) : TSource;

export type { ExtractEach as ZuordExtractEach };


// EXTRACT EQ

type ExtractEq<TSource, TBase> = TSource extends any ? (
    [InternalZuordTrait.Eq<TSource, TBase>] extends [true] ? TSource : never
) : never;

export type { ExtractEq as ZuordExtractEq };


// EXTRACT EQ EACH

type ExtractEqEach<TSource, TBases> = TBases extends [infer TBase, ...infer TRestBases] ? (
    ExtractEqEach<ExtractEq<TSource, TBase>, TRestBases>
) : TSource;

export type { ExtractEqEach as ZuordExtractEqEach };