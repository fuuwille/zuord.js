import { $ZuordUtil as $Util } from "../internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";

export namespace Only {
    export type Required<T extends Type.Plain, TMode extends Core.Mode.Flags> = $Util.Only.ResolveRequired<T, TMode>;
}