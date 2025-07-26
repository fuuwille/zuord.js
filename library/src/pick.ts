import { internalZuord as internal } from "./internal";
import { ShapeZuord as Shape, shapeZuord as shape } from "./shape";
import { Pick, PickLoose, PickPattern } from "./pick.types";

export function pick<TSouce extends Shape.PickSource, const TPattern extends PickPattern<TSouce, TPattern>>(source: TSouce, pattern: TPattern) {
    if(!shape.pickPlain(source)) {
        throw new TypeError("Pick function expects the source to be a plain.");
    }

    return internal.pick(source, pattern) as Pick<TSouce, TPattern>;
}

export function pickLoose<TSouce extends Shape.PickSource, const TPattern extends Shape.PickPattern<TSouce>>(source: TSouce, pattern: TPattern) {
    if(!shape.pickPlain(source)) {
        throw new TypeError("Pick function expects the source to be a plain.");
    }

    return internal.pick(source, pattern) as PickLoose<TSouce, TPattern>;
}