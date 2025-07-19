import { InternalZuord } from "./internal";

export type Merge<TContent, TMode extends MergeBaseMode = MergeDefaultMode> = InternalZuord.Merge<TContent, TMode>;

export type MergeBaseMode = InternalZuord.MergeBaseMode;

export type MergeDefaultMode = InternalZuord.MergeDefaultMode;