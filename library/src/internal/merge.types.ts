import { Integrate, IntegrateMode } from "./integrate.types";
import { ZuordType } from "@zuord/type";

export type Merge<TContent, TMode extends Partial<MergeMode>> = (
    TContent extends ZuordType.Tuple  ? (
        MergeFromTuple<TContent, TMode>
    ) : 
    TContent extends ZuordType.Array ? (
        MergeFromArray<TContent, TMode>
    ) : never
);

export type MergeFromTuple<TContent, TMode extends Partial<MergeMode>> = (
    TContent extends [...infer TRest, infer TLast] ? (
        TRest["length"] extends 0 ? TLast : 
        TRest["length"] extends 1 ? Integrate<TRest[0], TLast, TMode> 
        : Integrate<MergeFromTuple<TRest, TMode>, TLast, TMode>
    ) : {}
);

export type MergeFromArray<TContent, TMode extends Partial<MergeMode>> = TContent extends readonly (infer TInfer)[] ? (
    ZuordType.PlainAsRequired<TInfer> extends infer TRequired ? (
        ZuordType.UnionToTuple<TRequired> extends infer TNormalized ? (
            MergeFromTuple<TNormalized, TMode> 
        ) : never
    ) : never
) : never;

export type MergeMode = IntegrateMode;

export type MergeShape = ZuordType.Plain[] | ZuordType.Array[];