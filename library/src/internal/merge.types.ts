import { ZuordUtil } from "@zuord/util";
import { IntegrateMode, IntegratePlain } from "./integrate.types";
import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export type Merge<TContent, TMode extends Partial<MergeMode>> = ZuordTrait.Is<TContent, ZuordType.Tuple> extends true ? (
    ZuordType.ArrayDepth<TContent> extends 1 ? (
        TContent extends [...infer TRest, infer TLast] ? (
            TRest["length"] extends 0 ? (
                TLast
            ) : 
            TRest["length"] extends 1 ? (
                IntegratePlain<TRest[0], TLast, TMode>
            ) : (
                IntegratePlain<Merge<TRest, TMode>, TLast, TMode>
            )
        ) : {}
    ) : never
) : ZuordUtil.Normalize<TContent, TMode>;

export type MergeMode = IntegrateMode;