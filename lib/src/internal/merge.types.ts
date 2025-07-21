import { ZuordType } from "@zuord/type";
import { InternalZuord as Internal, internalZuord as internal } from "./index"

export type Merge<TContent, TMode extends MergeMode = typeof internal.mergeMode> = ZuordType.ArrayDepth<TContent> extends 1 ? (
    TContent extends [...infer Rest, infer Head] ? (
        Internal.Integrate<Head, Merge<Rest, TMode>, TMode>
    ) : {}
) : never;

export type MergeMode = Internal.IntegrateMode;