import { internalZuord as internal } from "./internal";
import { ShapeZuord as Shape, shapeZuord as shape } from "./shape";
import { Pick, PickLoose, PickPattern } from "./pick.types";

export function pick<TPlain extends Shape.PickSource, const TPattern extends PickPattern<TPlain, TPattern>>(plain: TPlain, pattern: TPattern) {
    if(!shape.pickPlain(plain)) {
        throw new TypeError("Pick function expects the target object to be a plain.");
    }

    return internal.pick(plain, pattern) as Pick<TPlain, TPattern>;
}

export function pickLoose<TPlain extends Shape.PickSource, const TPattern extends Shape.PickPattern<TPlain>>(plain: TPlain, pattern: TPattern) {
    if(!shape.pickPlain(plain)) {
        throw new TypeError("Pick function expects the target object to be a plain.");
    }

    return internal.pick(plain, pattern) as PickLoose<TPlain, TPattern>;
}