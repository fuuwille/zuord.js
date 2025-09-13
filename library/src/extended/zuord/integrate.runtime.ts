import { $zuord } from "../../internal";
import { zuordModeX } from "../mode";
import type { ZuordX, ZuordModeX } from "../../";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";


// LOOSE

export function loose <TSource extends ZuordType.Plain, TInput extends ZuordType.Plain> (source: TSource, input: TInput)
    : ZuordX.Integrate.Loose<TSource, TInput>;

export function loose <TSource extends ZuordType.Plain, TInput extends ZuordType.Plain, TMode extends Partial<ZuordModeX.Integrate.Loose>> (source: TSource, input: TInput, mode: TMode)
    : ZuordX.Integrate.Loose<TSource, TInput, TMode>;

export function loose <TSource extends ZuordType.Plain, TInput extends ZuordType.Plain, TMode extends Partial<ZuordModeX.Integrate.Loose>> (source: TSource, input: TInput, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Loose<TSource, TInput, TMode> { return $zuord.integrate.plain(source, input, [zuordModeX.integrate.loose, mode]) as ZuordX.Integrate.Loose<TSource, TInput, TMode>; }


// RESTRICT

export function restrict <TBase extends ZuordType.Plain, TInput extends ZuordUtil.Restrict.Keys<TBase, TInput>> (base: TBase, input: TInput)
    : ZuordX.Integrate.Restrict<TBase, TInput>;

export function restrict <TBase extends ZuordType.Plain, TInput extends ZuordUtil.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Restrict>> (base: TBase, input: TInput, mode: TMode)
    : ZuordX.Integrate.Restrict<TBase, TInput, TMode>;

export function restrict <TBase extends ZuordType.Plain, TInput extends ZuordUtil.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Restrict>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Restrict<TBase, TInput, TMode> { return $zuord.integrate.plain(base, input, [zuordModeX.integrate.restrict, mode]) as ZuordX.Integrate.Restrict<TBase, TInput, TMode>; }


// ARRAY

export function array <TBase extends ZuordType.Array, TInput extends ZuordType.Array> (base: [...TBase], input: [...TInput])
    : ZuordX.Integrate.Array<TBase, TInput>;

export function array <TBase extends ZuordType.Array, TInput extends ZuordType.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> (base: [...TBase], input: [...TInput], mode : TMode)
    : ZuordX.Integrate.Array<TBase, TInput, TMode>;

export function array <TBase extends ZuordType.Array, TInput extends ZuordType.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> (base: [...TBase], input: [...TInput], mode : TMode = {} as TMode)
    : ZuordX.Integrate.Array<TBase, TInput, TMode> { return $zuord.integrate.array(base, input, [zuordModeX.integrate.array, mode]) as ZuordX.Integrate.Array<TBase, TInput, TMode>; }