import { $zuord } from "../../internal";
import { zuordModeX } from "../mode";
import type { ZuordX, ZuordModeX } from "../../";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";


// LOOSE

export function loose <TSource extends ZuordType.Plain, TContent extends ZuordType.Plain> (source: TSource, content: TContent)
    : ZuordX.Integrate.Loose<TSource, TContent>;

export function loose <TSource extends ZuordType.Plain, TContent extends ZuordType.Plain, TMode extends Partial<ZuordModeX.Integrate.Loose>> (source: TSource, content: TContent, mode: TMode)
    : ZuordX.Integrate.Loose<TSource, TContent, TMode>;

export function loose <TSource extends ZuordType.Plain, TContent extends ZuordType.Plain, TMode extends Partial<ZuordModeX.Integrate.Loose>> (source: TSource, content: TContent, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Loose<TSource, TContent, TMode> { return $zuord.integrate.plain(source, content, [zuordModeX.integrate.loose, mode]) as ZuordX.Integrate.Loose<TSource, TContent, TMode>; }


// RESTRICT

export function restrict <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>> (source: TSource, patch: TPatch)
    : ZuordX.Integrate.Restrict<TSource, TPatch>;

export function restrict <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordModeX.Integrate.Restrict>> (source: TSource, patch: TPatch, mode: TMode)
    : ZuordX.Integrate.Restrict<TSource, TPatch, TMode>;

export function restrict <TSource extends ZuordType.Plain, TPatch extends ZuordUtil.Restrict.Keys<TSource, TPatch>, TMode extends Partial<ZuordModeX.Integrate.Restrict>> (source: TSource, patch: TPatch, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Restrict<TSource, TPatch, TMode> { return $zuord.integrate.plain(source, patch, [zuordModeX.integrate.restrict, mode]) as ZuordX.Integrate.Restrict<TSource, TPatch, TMode>; }


// ARRAY

export function array <TBase extends ZuordType.Array, TInput extends ZuordType.Array> (base: [...TBase], input: [...TInput])
    : ZuordX.Integrate.Array<TBase, TInput>;

export function array <TBase extends ZuordType.Array, TInput extends ZuordType.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> (base: [...TBase], input: [...TInput], mode : TMode)
    : ZuordX.Integrate.Array<TBase, TInput, TMode>;

export function array <TBase extends ZuordType.Array, TInput extends ZuordType.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> (base: [...TBase], input: [...TInput], mode : TMode = {} as TMode)
    : ZuordX.Integrate.Array<TBase, TInput, TMode> { return $zuord.integrate.array(base, input, [zuordModeX.integrate.array, mode]) as ZuordX.Integrate.Array<TBase, TInput, TMode>; }