import { InternalZuord as Internal } from "./internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export declare namespace Pick {
    export type Plain<TPlain extends Type.Plain, TPattern extends Util.Strict.Keys<Util.Pattern<TPlain>, TPattern>> = Internal.Pick.Plain<TPlain, TPattern>;

    export type PlainLoose<TPlain extends Type.Plain, TPattern extends Util.Pattern<TPlain>> = Internal.Pick.Plain<TPlain, TPattern>;
}