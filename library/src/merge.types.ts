import { InternalZuord as Internal } from "./internal";
import { ZuordType } from "@zuord/type";
import { mergeMode } from "./merge";
import { ZuordTrait } from "@zuord/trait";

export type Merge<TContent extends ZuordType.Plain[], TMode extends MergeMode = typeof mergeMode> = ZuordTrait.Is<TContent, ZuordType.Tuple> extends true ? (
    ZuordType.ArrayDepth<TContent> extends 1 ? (
        Internal.Merge<TContent, TMode>
    ) : never
) : Internal.Normalize<TContent>;

export type MergeMode = Internal.MergeMode;