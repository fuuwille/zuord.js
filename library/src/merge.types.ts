import { InternalZuord as Internal } from "./internal";
import { ZuordCore } from "@zuord/core";
import { ShapeZuord as Shape } from "./shape";

export namespace Merge {
    export type Object<TContent extends Shape.MergeContent, TMode extends Shape.MergeMode = {}> 
        = Internal.Merge.Object<TContent, ZuordCore.ModeResolve<[TMode]>>;
}