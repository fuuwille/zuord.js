import type { $ZuordUtil } from "../internal";
import type { ZuordType } from "@zuord/type";

export declare namespace Pattern {
    export type Plain<T extends ZuordType.Plain> = $ZuordUtil.Pattern.PlainResolve<T>;
}