import { internalZuord as internal } from "./internal";
import { ShapeZuord as Shape, shapeZuord as shape } from "./shape";
import { Pick } from "./pick.types";

function plain<TPlain extends Shape.OmitPlain, const TPattern extends Shape.OmitPattern<TPlain, TPattern>>(plain: TPlain, pattern: TPattern) {
    if(!shape.omitPlain(plain)) {
        throw new TypeError("Pick function expects the target object to be a plain.");
    }

    return internal.pick.plain(plain, pattern) as Pick.Plain<TPlain, TPattern>;
}

function plainLoose<TPlain extends Shape.OmitPlain, const TPattern extends Shape.OmitPatternLoose<TPlain>>(plain: TPlain, pattern: TPattern) {
    if(!shape.omitPlain(plain)) {
        throw new TypeError("Pick function expects the target object to be a plain.");
    }

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