import { internalZuord as internal } from "../../internal";
import { zuordCore as core } from "@zuord/core";
import { zuordType as type, ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";
import { mode, Mode } from "../mode";
import { Plain } from "./plain.types";


// PLAIN

const $plain = ($base: Type.Plain, $input: Type.Plain, $mode: Partial<Mode.Integrate.Plain>) => {
    if(!type.plain($base)) {
        throw new TypeError("Integrate function expects the base to be a valid plain.");
    }

    if(!type.plain($input)) {
        throw new TypeError("Integrate function expects the input to be a valid plain.");
    }

    return internal.integrate.plain($base, $input, core.mode.resolve([mode.integrate.plain, $mode]));
}


// LOOSE

export function loose <TBase extends Type.Plain, TInput extends Type.Plain> (base: TBase, input: TInput)
    : Plain.Loose<TBase, TInput>;

export function loose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : Plain.Loose<TBase, TInput, TMode>;

export function loose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Plain.Loose<TBase, TInput, TMode> { return $plain(base, input, mode); }


// RESTRICT

export function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>> (base: TBase, input: TInput)
    : Plain.Restrict<TBase, TInput>;

export function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : Plain.Restrict<TBase, TInput, TMode>;

export function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Plain.Restrict<TBase, TInput, TMode> { return $plain(base, input, mode); }


// STRICT

export function strict <TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>> (base: TBase, input: TInput)
    : Plain.Strict<TBase, TInput>;

export function strict <TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : Plain.Strict<TBase, TInput, TMode>;

export function strict <TBase extends Type.Plain, TInput extends Util.Strict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Plain.Strict<TBase, TInput, TMode> { return $plain(base, input, mode); }