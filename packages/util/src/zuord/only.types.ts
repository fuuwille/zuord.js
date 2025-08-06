import { $ZuordUtil as $Util } from "../internal";
import { ZuordType as Type } from "@zuord/type";

export namespace Only {
    export type Required<T extends Type.Plain> = $Util.Only.ResolveRequired<T>;
}