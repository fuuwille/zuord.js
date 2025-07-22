import { zuord } from ".";
import { InternalZuord as Internal } from "./internal";
import { ZuordType } from "@zuord/type";

export type Merge<TContent extends ZuordType.Plain[], TMode extends MergeMode = typeof zuord.mergeMode> = ZuordType.ArrayDepth<TContent> extends 1 ? (
    Internal.Merge<TContent, TMode>
) : never;

export type MergeMode = Internal.MergeMode;