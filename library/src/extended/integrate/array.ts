import { internalZuord as internal } from "../../internal";
import { zuordCore as core } from "@zuord/core";
import { ZuordType as Type } from "@zuord/type";
import { mode } from "../mode";
import type { ZuordX } from "..";

const $ = ($base: Type.Array, $input: Type.Array, $mode: Partial<ZuordX.Mode.Integrate.Array>) => {
    return internal.integrate.array($base, $input, core.mode.resolve([mode.integrate.array, $mode]));
}

export function loose <TBase extends Type.Array, TInput extends Type.Array> (base: TBase, input: TInput)
    : ZuordX.Integrate.Array.Loose<TBase, TInput>;

export function loose <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordX.Mode.Integrate.Array>> (base: TBase, input: TInput, mode : TMode)
    : ZuordX.Integrate.Array.Loose<TBase, TInput, TMode>;

export function loose <TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordX.Mode.Integrate.Array>> (base: TBase, input: TInput, mode : TMode = {} as TMode)
    : ZuordX.Integrate.Array.Loose<TBase, TInput, TMode> { return $(base, input, mode) as ZuordX.Integrate.Array.Loose<TBase, TInput, TMode>; }