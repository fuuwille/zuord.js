import { $ZuordUtil as $Util } from "../internal";
import { ZuordType as Type } from "@zuord/type";

export namespace Tuple {
    export type Keys<T extends Type.Tuple> = $Util.Tuple.Keys<T>;
}