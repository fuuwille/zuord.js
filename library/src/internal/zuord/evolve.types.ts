import { Integrate } from "./integrate.types";
import { Merge } from "./merge.types";

export namespace Evolve {
    export type PlainResolve<TBase, TContent, TMode> 
        = Integrate.Unknown<TBase, Merge.Object<TContent, TMode>, TMode>;
}