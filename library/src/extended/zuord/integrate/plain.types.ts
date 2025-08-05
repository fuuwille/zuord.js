import { zuordModeX } from "zuord/extended";
import type { $Zuord } from "zuord/internal";
import type { ZuordModeX } from "zuord/extended";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";
import type { ZuordUtil as Util } from "@zuord/util";


//

export namespace Plain {
    export type Loose<TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<ZuordModeX.Integrate.Plain> = {}> 
        = $Zuord.Integrate.ResolvePlain<TBase, TInput, Core.Mode.Resolve<[typeof zuordModeX.integrate.plain, TMode]>>;

    export type Restrict<TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain> = {}> 
        = $Zuord.Integrate.ResolvePlain<TBase, TInput, Core.Mode.Resolve<[typeof zuordModeX.integrate.plain, TMode]>>;

    export type Strict<TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain> = {}> 
        = $Zuord.Integrate.ResolvePlain<TBase, TInput, Core.Mode.Resolve<[typeof zuordModeX.integrate.plain, TMode]>>;
}