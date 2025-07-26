import { internalZuord as internal } from "./internal";
import { ShapeZuord as Shape } from "./shape";
import { Pick } from "./pick.types";

export function pick<TPlain extends Shape.PickPlain, const TPattern extends Shape.PickPattern<TPlain, TPattern>>(plain: TPlain, pattern: TPattern) {
    return internal.pick(plain, pattern) as Pick<TPlain, TPattern>;
}