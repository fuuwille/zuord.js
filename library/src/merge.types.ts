import { InternalZuord as Internal } from "./internal";
import { ZuordCore } from "@zuord/core";
import { mode } from "./mode";
import { ZuordType as Type } from "@zuord/type";
import { Mode } from "./mode.types";

export declare namespace Merge {
    export type Object<TContent extends Type.ArrayOf<Type.Plain | Type.Array>, TMode extends Partial<Mode.Merge> = {}> 
        = Internal.Merge.Object<TContent, ZuordCore.Mode.Resolve<[typeof mode.merge, TMode]>>;
}