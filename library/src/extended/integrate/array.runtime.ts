import { zuordMode } from "../../mode/";
import { zuordCore as core } from "@zuord/core";
import { $zuord } from "../../internal";

import type { ZuordX } from "..";
import type { ZuordMode } from "../../mode/";
import type { ZuordType as Type } from "@zuord/type";


//

const $ = ($base: Type.Array, $input: Type.Array, $mode: Partial<ZuordMode.Extended.Integrate.Array>) => {
    return $zuord.integrate.array($base, $input, core.mode.resolve([zuordMode.extended.integrate.array, $mode]));
}


// LOOSE

export function loose <TBase extends Type.Array, TInput extends Type.Array> (base: TBase, input: TInput)
    : ZuordX.Integrate.Array.Loose<TBase, TInput>;

export function loose <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordMode.Extended.Integrate.Array>> (base: TBase, input: TInput, mode : TMode)
    : ZuordX.Integrate.Array.Loose<TBase, TInput, TMode>;

export function loose <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordMode.Extended.Integrate.Array>> (base: TBase, input: TInput, mode : TMode = {} as TMode)
    : ZuordX.Integrate.Array.Loose<TBase, TInput, TMode> { return $(base, input, mode) as ZuordX.Integrate.Array.Loose<TBase, TInput, TMode>; }