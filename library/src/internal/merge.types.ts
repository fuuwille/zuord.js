import { InternalZuord as Internal, internalZuord as internal } from "./index"

export type Merge<TContent, TMode extends MergeMode = typeof internal.mergeMode> = TContent extends [...infer Rest, infer Head] ? (
    Rest["length"] extends 0 ? (
        Head
    ) : 
    Rest["length"] extends 1 ? (
        Internal.Integrate<Head, Rest[0], TMode>
    ) : (
        Internal.Integrate<Head, Merge<Rest, TMode>, TMode>
    )
) : {};

export type MergeMode = Internal.IntegrateMode;