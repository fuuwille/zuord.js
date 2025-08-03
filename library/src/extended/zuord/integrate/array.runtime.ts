import { $zuord } from "zuord/internal";
import { zuordModeX } from "zuord/extended";
import { zuordCore as core } from "@zuord/core";
import type { ZuordX } from "zuord/extended";
import type { ZuordModeX } from "zuord/extended";
import type { ZuordType as Type } from "@zuord/type";


//

const $ = ($base: Type.Array, $input: Type.Array, $mode: Partial<ZuordModeX.Integrate.Array>) => {
    return $zuord.integrate.array($base, $input, core.mode.resolve([zuordModeX.integrate.array, $mode]));
}


// LOOSE

export function loose <TBase extends Type.Array, TInput extends Type.Array> (base: TBase, input: TInput)
    : ZuordX.Integrate.Array.Loose<TBase, TInput>;

export function loose <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> (base: TBase, input: TInput, mode : TMode)
    : ZuordX.Integrate.Array.Loose<TBase, TInput, TMode>;

export function loose <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordModeX.Integrate.Array>> (base: TBase, input: TInput, mode : TMode = {} as TMode)
    : ZuordX.Integrate.Array.Loose<TBase, TInput, TMode> { return $(base, input, mode) as ZuordX.Integrate.Array.Loose<TBase, TInput, TMode>; }