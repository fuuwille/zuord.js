import type { $Zuord } from "../../internal";
import type { zuordModeX, ZuordModeX } from "../../";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";
import type { ZuordUtil as Util } from "@zuord/util";

type $Plain<TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<ZuordModeX.Integrate.Plain>> =
    $Zuord.Integrate.Plain<TBase, TInput, Core.Mode.Resolve<[typeof zuordModeX.integrate.plain, TMode]>>;

type $Array<TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> =
    $Zuord.Integrate.Array<TBase, TInput, Core.Mode.Resolve<[typeof zuordModeX.integrate.array, TMode]>>;

export type Loose<TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<ZuordModeX.Integrate.Plain> = {}> 
    = $Plain<TBase, TInput, TMode>;

export type Restrict<TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain> = {}> 
    = $Plain<TBase, TInput, TMode>;

export type Strict<TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain> = {}> 
    = $Plain<TBase, TInput, TMode>;

export type Array<TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordModeX.Integrate.Array> = {}> 
    = $Array<TBase, TInput, TMode>;