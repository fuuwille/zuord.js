import { internalZuord as internal } from "./internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";
import { Omit } from "./omit.types";

function plain<TPlain extends Type.Plain, TPattern extends Util.Exact.Keys<Util.Pattern<TPlain>, TPattern>>(plain: TPlain, pattern: TPattern) {
    return internal.omit.plain(plain, pattern) as Omit.Plain<TPlain, TPattern>;
}

function plainLoose<TPlain extends Type.Plain, TPattern extends Util.Pattern<TPlain>>(plain: TPlain, pattern: TPattern) {
    return internal.omit.plain(plain, pattern) as Omit.PlainLoose<TPlain, TPattern>;
}


// EXPORT

type omit = {
    readonly plain: typeof plain;
    readonly plainLoose: typeof plainLoose;
}

export const omit: omit = {
    plain: plain,
    plainLoose: plainLoose
};