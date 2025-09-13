import type { $Zuord } from "../../internal";
import type { zuordModeX, ZuordModeX } from "../../";
import type { ZuordType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";
import type { ZuordUtil } from "@zuord/util";

export type Loose<TBase extends ZuordType.Plain, TInput extends ZuordType.Plain, TMode extends Partial<ZuordModeX.Integrate.Loose> = {}> 
    = $Zuord.Integrate.Plain<TBase, TInput, ZuordCore.ModeResolve<[typeof zuordModeX.integrate.loose, TMode]>>;

export type Restrict<TBase extends ZuordType.Plain, TInput extends ZuordUtil.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Restrict> = {}> 
    = $Zuord.Integrate.Plain<TBase, TInput, ZuordCore.ModeResolve<[typeof zuordModeX.integrate.restrict, TMode]>>;

export type Array<TBase extends ZuordType.Array, TInput extends ZuordType.Array, TMode extends Partial<ZuordModeX.Integrate.Array> = {}> 
    = $Zuord.Integrate.Array<TBase, TInput, ZuordCore.ModeResolve<[typeof zuordModeX.integrate.array, TMode]>>;