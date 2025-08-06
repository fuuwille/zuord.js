import { $ZuordUtil } from "../internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";

export namespace One {
    export type Hybrid<T extends Type.Plain | Type.Array, TMode extends Core.Mode.Field> 
        = $ZuordUtil.One.ResolveHybrid<T, Core.Mode.Resolve<[TMode, { onePlain: true, oneArray: true }]>>;

    export type Plain<T extends Type.Plain, TMode extends Core.Mode.Field> = $ZuordUtil.One.ResolvePlain<T, TMode>;

    export type Array<T extends Type.Array, TMode extends Core.Mode.Field> = $ZuordUtil.One.ResolveArray<T, TMode>;
}