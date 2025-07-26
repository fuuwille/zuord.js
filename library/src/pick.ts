import { ZuordType } from "@zuord/type";
import { internalZuord as internal } from "./internal";
import { Pick } from "./pick.types";
import { ShapeZuord as Shape } from "./shape";

export function pick<TPlain extends ZuordType.Plain, const TPattern extends Shape.PickPattern<TPlain, TPattern>>(plain: TPlain, pattern: TPattern) {
    return internal.pick(plain, pattern) as Pick<TPlain, TPattern>;
}