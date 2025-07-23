import { ZuordUtil } from "@zuord/util";
import { Integrate, IntegrateMode, IntegratePlain } from "./integrate.types";

export type Merge<TContent, TMode extends ZuordUtil.Partialize<MergeMode>> = TContent extends [...infer TRest, infer TLast] ? (
    TRest["length"] extends 0 ? (
        TLast
    ) : 
    TRest["length"] extends 1 ? (
        IntegratePlain<TRest[0], TLast, TMode>
    ) : (
        IntegratePlain<Merge<TRest, TMode>, TLast, TMode>
    )
) : {};

export type MergeMode = IntegrateMode;