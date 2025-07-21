import { zuord } from "zuord";
import { InternalZuord as Internal } from "./internal";

export type Merge<TContent, TMode extends MergeMode = typeof zuord.mergeMode> = Internal.Merge<TContent, TMode>;

export type MergeMode = Internal.MergeBaseMode;