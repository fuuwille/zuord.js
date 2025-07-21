import { internalZuord as internal, InternalZuord as Internal } from "./internal";

export type Merge<TContent, TMode extends MergeBaseMode = typeof internal.mergeBaseMode> = Internal.Merge<TContent, TMode>;

export type MergeBaseMode = Internal.MergeBaseMode;