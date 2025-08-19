import type { $ZuordUtil } from "@zuord/util/internal";
import { ZuordType } from "@zuord/type";

export namespace Pattern {
    export type Plain<T extends ZuordType.Plain> = $ZuordUtil.Pattern.PlainResolve<T>;
}