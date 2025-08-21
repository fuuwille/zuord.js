import type { $ZuordUtil } from "../internal";
import type { ZuordType } from "@zuord/type";

export declare namespace Tuple {
    export type Keys<T extends ZuordType.Tuple> = $ZuordUtil.Tuple.Keys<T>;

    export type Unify<T extends ZuordType.Tuple> = $ZuordUtil.Tuple.Unify<T>;
}