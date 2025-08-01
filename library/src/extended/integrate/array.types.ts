import { InternalZuord as Internal } from "../../internal";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { mode, Mode } from "../mode";

export type Loose<TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<Mode.Integrate.Array> = {}> 
    = Internal.Integrate.Array<TBase, TInput, Core.Mode.Resolve<[typeof mode.integrate.array, TMode]>>;