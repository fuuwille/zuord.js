import { $Zuord } from ".";


export namespace Evolve {
    export type ResolvePlain<TBase, TContent, TMode> 
        = $Zuord.Integrate.Any<TBase, $Zuord.Merge.ResolvePlain<TContent, TMode>, TMode>;
}