import { internalZuord as internal } from "../../internal";
import { zuordCore as core } from "@zuord/core";
import { zuordType as type, ZuordType as Type } from "@zuord/type";
import { mode, Mode } from "../mode";

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