import { ZuordUtil } from "@zuord/util";
import { Integrate, IntegrateMode } from "./integrate.types";

export type Merge<TContent, TMode extends ZuordUtil.Partialize<MergeMode>> = TContent extends [...infer Rest, infer Head] ? (
    Rest["length"] extends 0 ? (
        Head
    ) : 
    Rest["length"] extends 1 ? (
        Integrate<Rest[0], Head, TMode>
    ) : (
        Integrate<Merge<Rest, TMode>, Head, TMode>
    )
) : {};

export type MergeMode = IntegrateMode;