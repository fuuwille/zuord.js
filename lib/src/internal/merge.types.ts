import { ZuordCore } from "@zuord/core";
import { InternalZuord } from "./index"
import { ZuordType } from "@zuord/type";

export type Merge<TContent, TMode extends MergeBaseMode = MergeDefaultMode> = (ZuordType.ArrayDepth<TContent> extends 1 ? (
    TContent extends [...infer Rest, infer Head] ? (
        InternalZuord.Integrate<Merge<Rest, TMode>, Head, TMode>
    ) : {}
) :
    ZuordType.ArrayInfer<TContent> extends infer TInfer ? (
        TInfer extends ZuordType.Array ? (
            { [K in keyof TContent]: Merge<TContent[K], TMode> }
        ) : TContent
    ) : {}
);

export type MergeBaseMode = InternalZuord.IntegrateBaseMode;

export type MergeDefaultMode = InternalZuord.IntegrateDefaultMode;

export type MergeResolvedMode<TMode extends Partial<MergeBaseMode>> 
= ZuordCore.ModeOf<[MergeDefaultMode, TMode]>;