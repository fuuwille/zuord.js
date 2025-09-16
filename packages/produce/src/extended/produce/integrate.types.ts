import type { $Zuord } from "../../internal";
import type { zuordModeX, ZuordModeX } from "../..";
import type { ZuordType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";
import type { ZuordUtil } from "@zuord/util";

export type Loose<TSource extends ZuordType.Plain, TContent extends ZuordType.Plain, TMode extends Partial<ZuordModeX.Integrate.Loose> = {}> 
    = $Zuord.Integrate.Plain<TSource, TContent, ZuordCore.ModeResolve<[typeof zuordModeX.integrate.loose, TMode]>>;

export type Restrict<TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordModeX.Integrate.Restrict> = {}> 
    = $Zuord.Integrate.Plain<TSource, TPatch, ZuordCore.ModeResolve<[typeof zuordModeX.integrate.restrict, TMode]>>;

export type Array<TSource extends ZuordType.Array, TContent extends ZuordType.Array, TMode extends Partial<ZuordModeX.Integrate.Array> = {}> 
    = $Zuord.Integrate.Array<TSource, TContent, ZuordCore.ModeResolve<[typeof zuordModeX.integrate.array, TMode]>>;