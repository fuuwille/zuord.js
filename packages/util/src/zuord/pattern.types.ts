import type { $ZuordUtil } from "@zuord/util/internal";
import type { ZuordType } from "@zuord/type";

export declare namespace Pattern {
    export type Plain<T extends ZuordType.Plain> = $ZuordUtil.Pattern.PlainResolve<T>;
}