import { ZuordType } from "@zuord/type";
import { InternalZuordTrait } from "./internal";


// EXTRACT

type Extract<TSource, TBase> = InternalZuordTrait.Extract<TSource, TBase>;

export type { Extract as ZuordExtract };


// EXTRACT EACH

type ExtractEach<TSource, TBases extends ZuordType.Tuple> = InternalZuordTrait.ExtractEach<TSource, TBases>;

export type { ExtractEach as ZuordExtractEach };


// EXTRACT EQ

type ExtractEq<TSource, TBase> = InternalZuordTrait.ExtractEq<TSource, TBase>;

export type { ExtractEq as ZuordExtractEq };


// EXTRACT EQ EACH

type ExtractEqEach<TSource, TBases extends ZuordType.Array> = InternalZuordTrait.ExtractEqEach<TSource, TBases>;

export type { ExtractEqEach as ZuordExtractEqEach };