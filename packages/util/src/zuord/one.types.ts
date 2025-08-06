import { $ZuordUtil } from "../internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";

export namespace Unify {
    export type Hybrid<T extends Type.Plain | Type.Array, TMode extends Core.Mode.Field> 
        = $ZuordUtil.Unify.ResolveHybrid<T, Core.Mode.Resolve<[{ onePlain: true, oneArray: true }, TMode]>>;

    export type Plain<T extends Type.Plain, TMode extends Core.Mode.Field> = $ZuordUtil.Unify.ResolvePlain<T, TMode>;

    export type Array<T extends Type.Array, TMode extends Core.Mode.Field> = $ZuordUtil.Unify.ResolveArray<T, TMode>;
}