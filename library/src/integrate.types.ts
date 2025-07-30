import { InternalZuord as Internal } from "./internal";
import { ZuordCore } from "@zuord/core";
import { ZuordUtil as Util } from "@zuord/util";
import { mode } from "./mode";
import { ZuordType as Type } from "@zuord/type";
import { Mode } from "./mode.types";

export declare namespace Integrate {
    export type Plain<TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate> = {}> 
        = Internal.Integrate.Plain<TBase, TInput, ZuordCore.Mode.Resolve<[typeof mode.integrate, TMode]>>;

    export type PlainLoose<TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<Mode.Integrate> = {}> 
        = Internal.Integrate.Plain<TBase, TInput, ZuordCore.Mode.Resolve<[typeof mode.integrate, TMode]>>;

    export type PlainStrict<TBase extends Type.Plain, TInput extends Util.Exact.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate> = {}> 
        = Internal.Integrate.Plain<TBase, TInput, ZuordCore.Mode.Resolve<[typeof mode.integrate, TMode]>>;

    export type Array<TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<Mode.Integrate> = {}> 
        = Internal.Integrate.Array<TBase, TInput, ZuordCore.Mode.Resolve<[typeof mode.integrate, TMode]>>;
}