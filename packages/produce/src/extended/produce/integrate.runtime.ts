import { $zuord } from "../../internal";
import { zuordXMode } from "../produceMode";
import { zuordCore } from "@zuord/core";
import type { ZuordX, ZuordModeX } from "../..";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";


// LOOSE

export function loose <TSource extends ZuordType.Plain, TContent extends ZuordType.Plain> (source: TSource, content: TContent)
    : ZuordX.Integrate.Loose<TSource, TContent>;

export function loose <TSource extends ZuordType.Plain, TContent extends ZuordType.Plain, TMode extends Partial<ZuordModeX.Integrate.Loose>> (source: TSource, content: TContent, mode: TMode)
    : ZuordX.Integrate.Loose<TSource, TContent, TMode>;

export function loose <TSource extends ZuordType.Plain, TContent extends ZuordType.Plain, TMode extends Partial<ZuordModeX.Integrate.Loose>> (source: TSource, content: TContent, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Loose<TSource, TContent, TMode> { return $zuord.integrate.plain(source, content, zuordCore.modeResolve([zuordXMode.integrate.loose, mode])) as ZuordX.Integrate.Loose<TSource, TContent, TMode>; }


// RESTRICT

export function restrict <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>> (source: TSource, patch: TPatch)
    : ZuordX.Integrate.Restrict<TSource, TPatch>;

export function restrict <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordModeX.Integrate.Restrict>> (source: TSource, patch: TPatch, mode: TMode)
    : ZuordX.Integrate.Restrict<TSource, TPatch, TMode>;

export function restrict <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordModeX.Integrate.Restrict>> (source: TSource, patch: TPatch, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Restrict<TSource, TPatch, TMode> { return $zuord.integrate.plain(source, patch, zuordCore.modeResolve([zuordXMode.integrate.restrict, mode])) as ZuordX.Integrate.Restrict<TSource, TPatch, TMode>; }


// ARRAY

export function array <TSource extends ZuordType.Array, TContent extends ZuordType.Array> (source: [...TSource], content: [...TContent])
    : ZuordX.Integrate.Array<TSource, TContent>;

export function array <TSource extends ZuordType.Array, TContent extends ZuordType.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> (source: [...TSource], content: [...TContent], mode : TMode)
    : ZuordX.Integrate.Array<TSource, TContent, TMode>;

export function array <TSource extends ZuordType.Array, TContent extends ZuordType.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> (source: [...TSource], content: [...TContent], mode : TMode = {} as TMode)
    : ZuordX.Integrate.Array<TSource, TContent, TMode> { return $zuord.integrate.array(source, content, zuordCore.modeResolve([zuordXMode.integrate.array, mode])) as ZuordX.Integrate.Array<TSource, TContent, TMode>; }