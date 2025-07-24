import { InternalZuord as Internal } from "./internal";
import { ZuordType } from "@zuord/type";
import { ZuordCore } from "@zuord/core";
import { mergeMode } from "./merge";

export type Merge<TContent extends ZuordType.Plain[], TMode extends Partial<MergeMode> = {}> 
    = Internal.Merge<TContent, ZuordCore.ModeResolve<[typeof mergeMode, TMode]>>;

export type MergeMode = Internal.MergeMode;

export type MergeShape = Internal.MergeShape;