import { ZuordType } from "@zuord/type";
import { InternalZuordUtil } from "./internal";
import { ZuordUtil } from ".";


// EXTRACT

type Extract<TSource, TBase> = InternalZuordUtil.Extract<TSource, TBase>;

export type { Extract as ZuordExtract };


// EXTRACT EACH

type ExtractEach<TSource, TBases extends ZuordType.Tuple> = InternalZuordUtil.ExtractEach<TSource, TBases>;

export type { ExtractEach as ZuordExtractEach };


// EXTRACT EQ

type ExtractEq<TSource, TBase> = InternalZuordUtil.ExtractEq<TSource, TBase>;

export type { ExtractEq as ZuordExtractEq };


// EXTRACT EQ EACH

type ExtractEqEach<TSource, TBases extends ZuordType.Array> = TBases extends [infer TBase, ...infer TRestBases] ? (
    ExtractEqEach<ExtractEq<TSource, TBase>, TRestBases>
) : TSource;

export type { ExtractEqEach as ZuordExtractEqEach };