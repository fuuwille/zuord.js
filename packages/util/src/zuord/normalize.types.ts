import { $ZuordUtil } from "../internal";
import { ZuordType as Type } from "@zuord/type";

export declare namespace Normalize {
    export type Plain<T extends Type.Plain, TMode> = $ZuordUtil.Normalize.ResolvePlain<T, TMode>;
}