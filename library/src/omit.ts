import { internalZuord as internal } from "./internal";
import { ShapeZuord as Shape, shapeZuord as shape } from "./shape";
import { Omit } from "./omit.types";

function plain<TPlain extends Shape.OmitPlain, const TPattern extends Shape.OmitPattern<TPlain, TPattern>>(plain: TPlain, pattern: TPattern) {
    if(!shape.omitPlain(plain)) {
        throw new TypeError("Pick function expects the target object to be a plain.");
    }

    return internal.omit.plain(plain, pattern) as Omit.Plain<TPlain, TPattern>;
}

function plainLoose<TPlain extends Shape.OmitPlain, const TPattern extends Shape.OmitPatternLoose<TPlain>>(plain: TPlain, pattern: TPattern) {
    if(!shape.omitPlain(plain)) {
        throw new TypeError("Pick function expects the target object to be a plain.");
    }

    return internal.omit.plain(plain, pattern) as Omit.PlainLoose<TPlain, TPattern>;
}


// EXPORT

type omit = {
    readonly plain: typeof plain;
    readonly plainLoose: typeof plainLoose;
}

export const omit = {
    plain: plain,
    plainLoose: plainLoose
};