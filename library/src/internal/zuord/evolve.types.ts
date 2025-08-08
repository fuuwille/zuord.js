import { $Zuord } from ".";
import { ZuordCore as Core } from "@zuord/core";


export namespace Evolve {
    export type ResolvePlain<TBase, TContent, TMode extends Core.Mode.Field> 
        = $Zuord.Integrate.ResolvePlain<TBase, $Zuord.Merge.ResolvePlain<TContent, TMode>, TMode>;
}