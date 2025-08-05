import { $ZuordUtil } from "../internal";
import { ZuordType as Type } from "@zuord/type";

export declare namespace Unify {
    export type Plain<T extends Type.Plain, TMode> = $ZuordUtil.Unify.ResolvePlain<T, TMode>;
}