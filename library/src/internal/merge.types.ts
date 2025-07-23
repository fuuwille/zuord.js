import { ZuordUtil } from "@zuord/util";
import { IntegrateMode, Integrate } from "./integrate.types";
import { ZuordTrait } from "@zuord/trait";
import { ZuordType } from "@zuord/type";

export type Merge<TContent extends ZuordType.Plain[], TMode extends Partial<MergeMode>> = ZuordTrait.Is<TContent, ZuordType.Tuple> extends true ? (
    ZuordType.ArrayDepth<TContent> extends 1 ? (
        TContent extends [...infer TRest extends ZuordType.Plain[], infer TLast extends ZuordType.Plain] ? (
            TRest["length"] extends 0 ? (
                TLast
            ) : 
            TRest["length"] extends 1 ? (
                Integrate<TRest[0], TLast, TMode>
            ) : (
                Integrate<Merge<TRest, TMode>, TLast, TMode>
            )
        ) : {}
    ) : never
) : ZuordUtil.Normalize<TContent, TMode>;

export type MergeMode = IntegrateMode;