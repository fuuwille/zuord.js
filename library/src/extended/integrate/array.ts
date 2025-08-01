import { mode } from "../mode";
import { zuordCore as core } from "@zuord/core";
import { internalZuord as internal } from "../../internal";

import type { ZuordX } from "..";
import type { ZuordType as Type } from "@zuord/type";


//

const $ = ($base: Type.Array, $input: Type.Array, $mode: Partial<ZuordX.Mode.Integrate.Array>) => {
    return internal.integrate.array($base, $input, core.mode.resolve([mode.integrate.array, $mode]));
}


// LOOSE

export function loose <TBase extends Type.Array, TInput extends Type.Array> (base: TBase, input: TInput)
    : ZuordX.Integrate.Array.Loose<TBase, TInput>;

export function loose <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordX.Mode.Integrate.Array>> (base: TBase, input: TInput, mode : TMode)
    : ZuordX.Integrate.Array.Loose<TBase, TInput, TMode>;

export function loose <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordX.Mode.Integrate.Array>> (base: TBase, input: TInput, mode : TMode = {} as TMode)
    : ZuordX.Integrate.Array.Loose<TBase, TInput, TMode> { return $(base, input, mode) as ZuordX.Integrate.Array.Loose<TBase, TInput, TMode>; }