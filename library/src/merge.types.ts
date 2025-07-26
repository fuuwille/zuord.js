import { InternalZuord as Internal } from "./internal";
import { ZuordCore } from "@zuord/core";
import { mergeMode } from "./merge";
import { ShapeZuord as Shape } from "./shape";

export type Merge<TContent extends Shape.MergeContent, TMode extends Shape.MergeMode = {}> 
    = Internal.Merge<TContent, ZuordCore.ModeResolve<[typeof mergeMode, TMode]>>;

export type MergeMode = Internal.MergeMode;