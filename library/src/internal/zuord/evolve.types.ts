import { Integrate } from "./integrate.types";
import { Merge } from "./merge.types";

export namespace Evolve {
    export type ResolvePlain<TBase, TContent, TMode> 
        = Integrate.Unknown<TBase, Merge.ResolvePlain<TContent, TMode>, TMode>;
}