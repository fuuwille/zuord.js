import type { $ZuordUtil } from "@zuord/util/internal";
import type { ZuordType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";

export declare namespace Unify {
    export type Hybrid<T extends ZuordType.Plain | ZuordType.Array, TMode extends ZuordCore.Mode.Flags = {}> 
        = $ZuordUtil.Unify.Hybrid<T, TMode>;

    export type Plain<T extends ZuordType.Plain, TMode extends ZuordCore.Mode.Flags = {}> 
        = $ZuordUtil.Unify.Plain<T, TMode>;

    export type Tuple<T extends ZuordType.Tuple, TMode extends ZuordCore.Mode.Flags = {}> 
        = $ZuordUtil.Unify.Tuple<T, TMode>;

    export type Array<T extends ZuordType.Array, TMode extends ZuordCore.Mode.Flags = {}> 
        = $ZuordUtil.Unify.Array<T, TMode>;
}