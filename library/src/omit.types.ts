import { InternalZuord as Internal } from "./internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export declare namespace Omit {
    export type Plain<TPlain extends Type.Plain, TPattern extends Util.Exact.Keys<Util.Pattern<TPlain>, TPattern>> = Internal.Omit.Plain<TPlain, TPattern>;

    export type PlainLoose<TPlain extends Type.Plain, TPattern extends Util.Pattern<TPlain>> = Internal.Omit.Plain<TPlain, TPattern>;
}