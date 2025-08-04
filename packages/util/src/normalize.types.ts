import { $ZuordUtil } from "./internal";
import { ZuordType as Type } from "@zuord/type";

export namespace Normalize {
    export type Plain<T extends Type.Plain, TMode> = $ZuordUtil.Normalize.PlainResolve<T, TMode>;
}