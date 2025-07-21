import { zuord } from "src";
import { InternalZuord as Internal } from "./internal";
import { ZuordType } from "../../packages/type/src";

export type Merge<TContent, TMode extends MergeMode = typeof zuord.mergeMode> = ZuordType.ArrayDepth<TContent> extends 1 ? (
    Internal.Merge<TContent, TMode>
) : never;

export type MergeMode = Internal.MergeMode;