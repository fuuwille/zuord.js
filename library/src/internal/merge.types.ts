import { ZuordUtil } from "@zuord/util";
import { IntegrateMode, IntegratePlain } from "./integrate.types";
import { ZuordType } from "@zuord/type";

export type Merge<TContent extends ZuordType.Plain[], TMode extends Partial<MergeMode>> = (
    TContent extends ZuordType.PlainTuple ? (
        MergeFromTuple<TContent, TMode>
    ) : 
    TContent extends ZuordType.PlainArray ? (
        MergeFromArray<TContent, TMode>
    ) : never
);

export type MergeFromTuple<TContent extends ZuordType.PlainTuple, TMode extends Partial<MergeMode>> = (
    TContent extends [...infer TRest extends ZuordType.PlainTuple, infer TLast extends ZuordType.Plain] ? (
        TRest["length"] extends 0 ? TLast : 
        TRest["length"] extends 1 ? IntegratePlain<TRest[0], TLast, TMode> 
        : IntegratePlain<MergeFromTuple<TRest, TMode>, TLast, TMode>
    ) : {}
) extends infer TMerged extends ZuordType.Plain ? TMerged : never;

export type MergeFromArray<TContent extends ZuordType.Plain[], TMode extends Partial<MergeMode>> = TContent extends readonly (infer TInfer)[] ? (
    ZuordType.PlainOnlyRequired<TInfer> extends infer TPlain extends ZuordType.Plain ? (
        ZuordType.UnionToTuple<TPlain> extends infer TNormalized extends ZuordType.PlainTuple ? (
            MergeFromTuple<TNormalized, TMode> 
        ) : never
    ) : never
) : never;

export type MergeMode = IntegrateMode;