import type { $ZuordUtil } from "@zuord/util/internal";
import { ZuordType as Type } from "@zuord/type";

export namespace Tuple {
    export type Keys<T extends Type.Tuple> = $ZuordUtil.Tuple.Keys<T>;

    export type Unify<T extends Type.Tuple> = $ZuordUtil.Tuple.Unify<T>;
}