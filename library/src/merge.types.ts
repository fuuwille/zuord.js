import { InternalZuord as Internal } from "./internal";
import { ZuordType } from "@zuord/type";
import { mergeMode } from "./merge";

export type Merge<TContent extends ZuordType.TupleLike<ZuordType.Plain>, TMode extends MergeMode = typeof mergeMode> = ZuordType.ArrayDepth<TContent> extends 1 ? (
    Internal.Merge<TContent, TMode>
) : never;

export type MergeMode = Internal.MergeMode;