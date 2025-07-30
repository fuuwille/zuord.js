import { InternalZuord as Internal } from "../../internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordUtil as Util } from "@zuord/util";
import { mode, Mode } from "../mode";

export declare namespace Integrate {
    export type Restrict<TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain> = {}> 
        = Internal.Integrate.Plain<TBase, TInput, Core.Mode.Resolve<[typeof mode.integrate.plain, TMode]>>;

    export type Loose<TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<Mode.Integrate.Plain> = {}> 
        = Internal.Integrate.Plain<TBase, TInput, Core.Mode.Resolve<[typeof mode.integrate.plain, TMode]>>;

    export type Strict<TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain> = {}> 
        = Internal.Integrate.Plain<TBase, TInput, Core.Mode.Resolve<[typeof mode.integrate.plain, TMode]>>;
}