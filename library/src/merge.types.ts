import { InternalZuord as Internal } from "./internal";
import { ZuordCore } from "@zuord/core";
import { mergeMode } from "./merge";
import { ShapeZuord } from "./shape";

export type Merge<TContent extends ShapeZuord.MergeContent, TMode extends Partial<MergeMode> = {}> 
    = Internal.Merge<TContent, ZuordCore.ModeResolve<[typeof mergeMode, TMode]>>;

export type MergeMode = Internal.MergeMode;