import { $ZuordUtil } from "../internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";

export namespace Unify {
    export type Hybrid<T extends Type.Plain | Type.Array, TMode extends Core.Mode.Field> 
        = $ZuordUtil.Unify.Hybrid<T, TMode>;

    export type Plain<T extends Type.Plain, TMode extends Core.Mode.Field> 
        = $ZuordUtil.Unify.Plain<T, TMode>;

    export type Array<T extends Type.Array, TMode extends Core.Mode.Field> 
        = $ZuordUtil.Unify.Array<T, TMode>;
}