import { ZuordType } from "@zuord/type";
import { internalZuord } from "./internal";
import { Pick } from "./pick.types";
import { ShapeZuord } from "./shape";

export function pick<TPlain extends ZuordType.Plain, const TPattern extends ShapeZuord.PickPattern<TPlain, TPattern>>(plain: TPlain, pattern: TPattern) {
    return internalZuord.pick(plain, pattern) as Pick<TPlain, TPattern>;
}