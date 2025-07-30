import { internalZuord as internal } from "./internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";
import { Pick } from "./pick.types";

function plain<TPlain extends Type.Plain, TPattern extends Util.Strict.Keys<Util.Pattern<TPlain>, TPattern>>(plain: TPlain, pattern: TPattern) {
    return internal.pick.plain(plain, pattern) as Pick.Plain<TPlain, TPattern>;
}

function plainLoose<TPlain extends Type.Plain, TPattern extends Util.Pattern<TPlain>>(plain: TPlain, pattern: TPattern) {
    return internal.pick.plain(plain, pattern) as Pick.PlainLoose<TPlain, TPattern>;
}


// EXPORT

type pick = {
    readonly plain: typeof plain;
    readonly plainLoose: typeof plainLoose;
}

export const pick: pick = {
    plain: plain,
    plainLoose: plainLoose
};