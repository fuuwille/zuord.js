import { Integrate } from "./integrate.types";
import { ZuordType } from "@zuord/type";
import { ZuordCore } from "@zuord/core";
import { ZuordUtil } from "@zuord/util";

export declare namespace Merge {
    export type ResolvePlain<TContent, TMode extends ZuordCore.Mode.Field> = (
        TContent extends ZuordType.PureTuple ? (
            Merge.ResolvePlainFromTuple<TContent, TMode>
        ) : 
        TContent extends ZuordType.Array ? (
            Merge.ResolvePlainFromArray<TContent, TMode>
        ) : never
    );

    export type ResolvePlainFromTuple<TContent, TMode extends ZuordCore.Mode.Field> = (
        TContent extends ZuordType.EndingTupleWith<infer TRest, infer TLast> ? (
            TRest["length"] extends 0 ? TLast : 
            TRest["length"] extends 1 ? Integrate.Unknown<TRest[0], TLast, TMode> 
            : Integrate.Unknown<ResolvePlainFromTuple<TRest, TMode>, TLast, TMode>
        ) : never
    );

    export type ResolvePlainFromArray<TContent, TMode extends ZuordCore.Mode.Field> = TContent extends readonly (infer TInfer)[] ? (
        ZuordType.PlainAsRequired<TInfer> extends infer TRequired extends ZuordType.Plain ? (
            ZuordUtil.Unify.Hybrid<TRequired, TMode>
        ) : never
    ) : never;
}