import { ZuordType } from "@zuord/type";
import { InternalZuordUtil as Internal } from "./internal";

export namespace Strict {
    export type Keys<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain> 
        = Internal.Exact.Keys<TBase, TContent>;
}