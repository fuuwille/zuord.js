import { $ZuordUtil } from "../internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";

export namespace Unify {
    export type Hybrid<T extends Type.Plain | Type.Array, TMode extends Core.Mode.Flags = {}> 
        = $ZuordUtil.Unify.Hybrid<T, TMode>;

    export type Plain<T extends Type.Plain, TMode extends Core.Mode.Flags = {}> 
        = $ZuordUtil.Unify.Plain<T, TMode>;

    export type Tuple<T extends Type.Tuple, TMode extends Core.Mode.Flags = {}> 
        = $ZuordUtil.Unify.Tuple<T, TMode>;

    export type Array<T extends Type.Array, TMode extends Core.Mode.Flags = {}> 
        = $ZuordUtil.Unify.Array<T, TMode>;
}