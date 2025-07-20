import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { InternalZuord as Internal, internalZuord as internal } from "./index"

export type Merge<TContent, TMode extends MergeBaseMode = typeof internal.mergeBaseMode> = (ZuordType.ArrayDepth<TContent> extends 1 ? (
    TContent extends [...infer Rest, infer Head] ? (
        Internal.Integrate<Merge<Rest, TMode>, Head, TMode>
    ) : {}
) :
    ZuordType.ArrayInfer<TContent> extends infer TInfer ? (
        TInfer extends ZuordType.Array ? (
            { [K in keyof TContent]: Merge<TContent[K], TMode> }
        ) : TContent
    ) : {}
);

export type MergeBaseMode = Internal.IntegrateBaseMode;

export type MergeResolvedMode<TMode extends Partial<MergeBaseMode>> 
= ZuordCore.ModeResolve<[typeof internal.mergeBaseMode, TMode]>;