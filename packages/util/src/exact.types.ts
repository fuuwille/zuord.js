import { ZuordType } from "@zuord/type";
import { InternalZuordUtil as Internal } from "./internal";

export namespace Exact {
    export type Plain<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain> 
        = Internal.ExactKeys<TBase, TContent>;

    export type PlainArray<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain[]> 
        = Internal.ExactKeysArray<TBase, TContent> extends infer TSantized extends any[] ? TSantized : never;

    export type PlainStrict<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain> 
        = Internal.ExactShape<TBase, TContent>;
}