import type { $Zuord } from "zuord/internal";
import type { zuordModeX, ZuordModeX } from "zuord/extended";
import type { ZuordType as Type } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";

export namespace Array {
    export type Loose<TBase extends Type.Array, TInput extends Type.Array, TMode extends Partial<ZuordModeX.Integrate.Array> = {}> 
        = $Zuord.Integrate.Array<TBase, TInput, Core.Mode.Resolve<[typeof zuordModeX.integrate.array, TMode]>>;
}