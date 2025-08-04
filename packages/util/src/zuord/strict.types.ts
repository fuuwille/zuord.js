import { $ZuordUtil } from "../internal";
import { ZuordType } from "@zuord/type";

export namespace Strict {
    export type Keys<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain> 
        = $ZuordUtil.Strict.Keys<TBase, TContent>;
}