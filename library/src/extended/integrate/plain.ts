import { internalZuord as internal } from "../../internal";
import { zuordCore as core } from "@zuord/core";
import { zuordType as type, ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";
import { mode, Mode } from "../mode";
import { Integrate } from "./plain.types";


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


// RESTRICT

function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>> (base: TBase, input: TInput)
    : Integrate.Restrict<TBase, TInput>;

function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : Integrate.Restrict<TBase, TInput, TMode>;

function restrict <TBase extends Type.Plain, TInput extends Util.Restrict.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Integrate.Restrict<TBase, TInput, TMode> { return $plain(base, input, mode); }


// LOOSE

function loose <TBase extends Type.Plain, TInput extends Type.Plain> (base: TBase, input: TInput)
    : Integrate.Loose<TBase, TInput>;

function loose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : Integrate.Loose<TBase, TInput, TMode>;

function loose <TBase extends Type.Plain, TInput extends Type.Plain, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Integrate.Loose<TBase, TInput, TMode> { return $plain(base, input, mode); }


// STRICT

function strict <TBase extends Type.Plain, TInput extends Util.Exact.Keys<TBase, TInput>> (base: TBase, input: TInput)
    : Integrate.Strict<TBase, TInput>;

function strict <TBase extends Type.Plain, TInput extends Util.Exact.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode)
    : Integrate.Strict<TBase, TInput, TMode>;

function strict <TBase extends Type.Plain, TInput extends Util.Exact.Keys<TBase, TInput>, TMode extends Partial<Mode.Integrate.Plain>> (base: TBase, input: TInput, mode: TMode = {} as TMode)
    : Integrate.Strict<TBase, TInput, TMode> { return $plain(base, input, mode); }