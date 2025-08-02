import { zuordMode } from "../../mode/";

import type { ZuordMode } from "../../mode/";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";
import type { $Zuord } from "../../internal";


//

export namespace Array {
    export type Loose<TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordMode.Extended.Integrate.Array> = {}> 
        = $Zuord.Integrate.Array<TBase, TInput, Core.Mode.Resolve<[typeof zuordMode.extended.integrate.array, TMode]>>;
}