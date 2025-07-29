import { internalZuord as internal } from "./internal";
import { ShapeZuord as Shape, shapeZuord as shape } from "./shape";
import { Omit, OmitLoose } from "./omit.types";

export function omit<TPlain extends Shape.OmitPlain, const TPattern extends Shape.OmitPattern<TPlain, TPattern>>(plain: TPlain, pattern: TPattern) {
    if(!shape.omitPlain(plain)) {
        throw new TypeError("Pick function expects the target object to be a plain.");
    }

    return internal.omit.plain(plain, pattern) as Omit<TPlain, TPattern>;
}

export function omitLoose<TPlain extends Shape.OmitPlain, const TPattern extends Shape.OmitPatternLoose<TPlain>>(plain: TPlain, pattern: TPattern) {
    if(!shape.omitPlain(plain)) {
        throw new TypeError("Pick function expects the target object to be a plain.");
    }

    return internal.omit.plain(plain, pattern) as OmitLoose<TPlain, TPattern>;
}