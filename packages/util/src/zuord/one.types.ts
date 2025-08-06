import { $ZuordUtil } from "src/internal";
import { ZuordType as Type } from "@zuord/type";

export namespace One {
    export type Hybrid<T extends Type.Plain | Type.Array, TMode> = $ZuordUtil.One.ResolveHybrid<T, TMode>;

    export type Plain<T extends Type.Plain, TMode> = $ZuordUtil.One.ResolvePlain<T, TMode>;

    export type Array<T extends Type.Array, TMode> = $ZuordUtil.One.ResolveArray<T, TMode>;
}