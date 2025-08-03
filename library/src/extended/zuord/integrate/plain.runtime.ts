import { $zuord } from "zuord/internal";
import { zuordCore as core } from "@zuord/core";
import { zuordType as type } from "@zuord/type";
import { zuordModeX } from "../../mode";

import type { ZuordX } from "..";
import type { ZuordModeX } from "../../mode";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordUtil as Util } from "@zuord/util";


//

const $ = ($base: Type.Plain, $input: Type.Plain, $mode: Partial<ZuordModeX.Integrate.Plain>) => {
    if(!type.plain($base)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    if(!type.plain($input)) {
        throw new TypeError("Integrate function expects the input to be a valid plain.");
    }

    return $zuord.integrate.plain($base, $input, core.mode.resolve([zuordModeX.integrate.plain, $mode]));
}


// LOOSE

export function loose <TBase extends Type.Plain, TInput extends Type.Plain> (base: TBase, input: TInput)
    : ZuordX.Integrate.Plain.Loose<TBase, TInput>;

export function loose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : ZuordX.Integrate.Plain.Loose<TBase, TInput, TMode>;

export function loose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Plain.Loose<TBase, TInput, TMode> { return $(base, input, mode); }


// RESTRICT

export function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>> (base: TBase, input: TInput)
    : ZuordX.Integrate.Plain.Restrict<TBase, TInput>;

export function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : ZuordX.Integrate.Plain.Restrict<TBase, TInput, TMode>;

export function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Plain.Restrict<TBase, TInput, TMode> { return $(base, input, mode); }


// STRICT

export function strict <TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>> (base: TBase, input: TInput)
    : ZuordX.Integrate.Plain.Strict<TBase, TInput>;

export function strict <TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : ZuordX.Integrate.Plain.Strict<TBase, TInput, TMode>;

export function strict <TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>, TMode extends Partial<ZuordModeX.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : ZuordX.Integrate.Plain.Strict<TBase, TInput, TMode> { return $(base, input, mode); }