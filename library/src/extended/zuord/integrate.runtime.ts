import { $zuord } from "../../internal";
import { zuordModeX } from "../mode";
import { zuordType as type } from "@zuord/type";
import { zuordCore as core } from "@zuord/core";
import type { ZuordX, ZuordModeX } from "../../";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordUtil as Util } from "@zuord/util";

const $Plain = ($base: Type.Plain, $input: Type.Plain, $mode: Partial<ZuordModeX.Integrate.Plain>) => {
    if(!type.plain($base)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    if(!type.plain($input)) {
        throw new TypeError("Integrate function expects the input to be a valid plain.");
    }

    return $zuord.integrate.plain($base, $input, core.mode.resolve([zuordModeX.integrate.plain, $mode]));
}

const $Array = ($base: Type.Array, $input: Type.Array, $mode: Partial<ZuordModeX.Integrate.Array>) => {
    if(!type.array($base)) {
        throw new TypeError("Integrate function expects the base to be a valid array.");
    }

    if(!type.array($input)) {
        throw new TypeError("Integrate function expects the input to be a valid array.");
    }

    return $zuord.integrate.array($base, $input, core.mode.resolve([zuordModeX.integrate.array, $mode]));
}


// LOOSE

export function loose <TBase extends Type.Plain, TInput extends Type.Plain> (base: TBase, input: TInput)
    : ZuordX.Integrate.Loose<TBase, TInput>;

export function loose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : ZuordX.Integrate.Loose<TBase, TInput, TMode>;

export function loose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Loose<TBase, TInput, TMode> { return $Plain(base, input, mode); }


// RESTRICT

export function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>> (base: TBase, input: TInput)
    : ZuordX.Integrate.Restrict<TBase, TInput>;

export function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : ZuordX.Integrate.Restrict<TBase, TInput, TMode>;

export function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Restrict<TBase, TInput, TMode> { return $Plain(base, input, mode); }


// STRICT

export function strict <TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>> (base: TBase, input: TInput)
    : ZuordX.Integrate.Strict<TBase, TInput>;

export function strict <TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : ZuordX.Integrate.Strict<TBase, TInput, TMode>;

export function strict <TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Strict<TBase, TInput, TMode> { return $Plain(base, input, mode); }


// ARRAY

export function array <TBase extends Type.Array, TInput extends Type.Array> (base: [...TBase], input: [...TInput])
    : ZuordX.Integrate.Array<TBase, TInput>;

export function array <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> (base: [...TBase], input: [...TInput], mode : TMode)
    : ZuordX.Integrate.Array<TBase, TInput, TMode>;

export function array <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> (base: [...TBase], input: [...TInput], mode : TMode = {} as TMode)
    : ZuordX.Integrate.Array<TBase, TInput, TMode> { return $Array(base, input, mode) as ZuordX.Integrate.Array<TBase, TInput, TMode>; }