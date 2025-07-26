import { ZuordType } from "@zuord/type";
import { ZuordUtil } from "@zuord/util";
import { internalZuord } from "./internal";
import { Pick } from "./pick.types";

export function pick<TPlain extends ZuordType.Plain, const TPattern extends ZuordUtil.Pattern<TPlain>>(plain: TPlain, pattern: TPattern) {
    return internalZuord.pick(plain, pattern) as Pick<TPlain, TPattern>;
}