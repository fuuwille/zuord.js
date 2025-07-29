import { InternalZuord as Internal } from "./internal";
import { ZuordCore } from "@zuord/core";
import { ShapeZuord as Shape } from "./shape";
import { mode } from "./mode";

export declare namespace Merge {
    export type Object<TContent extends Shape.MergeContent, TMode extends Shape.MergeMode = {}> 
        = Internal.Merge.Object<TContent, ZuordCore.Mode.Resolve<[typeof mode.merge, TMode]>>;
}