import { $Zuord } from ".";
import { ZuordCore as Core } from "@zuord/core";


export namespace Evolve {
    export type ResolvePlain<TBase, TContent, TMode extends Core.Mode.Field> 
        = $Zuord.Integrate.ResolveAny<TBase, $Zuord.Merge.ResolvePlain<TContent, TMode>, TMode>;
}