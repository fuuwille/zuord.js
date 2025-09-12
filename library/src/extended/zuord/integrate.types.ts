import type { $Zuord } from "../../internal";
import type { zuordModeX, ZuordModeX } from "../../";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";
import type { ZuordUtil as Util } from "@zuord/util";

export type Loose<TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<ZuordModeX.Integrate.Loose> = {}> 
    = $Zuord.Integrate.Plain<TBase, TInput, Core.ModeResolve<[typeof zuordModeX.integrate.loose, TMode]>>;

export type Restrict<TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Restrict> = {}> 
    = $Zuord.Integrate.Plain<TBase, TInput, Core.ModeResolve<[typeof zuordModeX.integrate.restrict, TMode]>>;

export type Array<TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordModeX.Integrate.Array> = {}> 
    = $Zuord.Integrate.Array<TBase, TInput, Core.ModeResolve<[typeof zuordModeX.integrate.array, TMode]>>;