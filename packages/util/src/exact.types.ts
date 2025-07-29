import { ZuordType } from "@zuord/type";
import { InternalZuordUtil as Internal } from "./internal";

export namespace Exact {
    export type Plain<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain> 
        = Internal.ExactKeys<TBase, TContent>;

    export type PlainArray<TContent extends ZuordType.Plain[]> 
        = Internal.ExactKeysFromInputs<TContent>;

    export type PlainStrict<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain> 
        = Internal.ExactShape<TBase, TContent>;
}