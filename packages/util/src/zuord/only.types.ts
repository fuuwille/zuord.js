import { $ZuordUtil as $Util } from "../internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";

export namespace Only {
    export type Required<T extends Type.Plain, _TMode extends Core.Mode.Field> = $Util.Only.ResolveRequired<T>;
}