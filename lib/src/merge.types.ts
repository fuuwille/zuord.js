import { internalZuord, InternalZuord } from "./internal";

export type Merge<TContent, TMode extends MergeBaseMode = typeof internalZuord.mergeBaseMode> = InternalZuord.Merge<TContent, TMode>;

export type MergeBaseMode = InternalZuord.MergeBaseMode;

export type MergeResolvedMode<TMode extends Partial<MergeBaseMode>>
= InternalZuord.MergeResolvedMode<TMode>;