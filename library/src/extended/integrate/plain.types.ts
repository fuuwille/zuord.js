import { mode } from "../mode";

import type { Mode } from "../mode";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";
import type { ZuordUtil as Util } from "@zuord/util";
import type { $Zuord } from "../../internal";


//

export namespace Plain {
    export type Loose<TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<Mode.Integrate.Plain> = {}> 
        = $Zuord.Integrate.Plain<TBase, TInput, Core.Mode.Resolve<[typeof mode.integrate.plain, TMode]>>;

    export type Restrict<TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain> = {}> 
        = $Zuord.Integrate.Plain<TBase, TInput, Core.Mode.Resolve<[typeof mode.integrate.plain, TMode]>>;

    export type Strict<TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain> = {}> 
        = $Zuord.Integrate.Plain<TBase, TInput, Core.Mode.Resolve<[typeof mode.integrate.plain, TMode]>>;
}