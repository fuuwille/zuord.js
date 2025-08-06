import { Integrate } from "./integrate.types";
import { ZuordType } from "@zuord/type";
import { ZuordCore } from "@zuord/core";
import { ZuordUtil } from "@zuord/util";

export declare namespace Merge {
    export type ResolvePlain<TContent, TMode extends ZuordCore.Mode.Field> = (
        TContent extends ZuordType.PureTuple ? (
            Merge.ResolvePlainTuple<TContent, TMode> extends infer TPlain extends ZuordType.Plain ? (
                ZuordUtil.Unify.Hybrid<TPlain, TMode>
            ) : never
        ) : 
        TContent extends ZuordType.Array ? (
            ZuordUtil.Unify.Hybrid<Merge.ResolvePlainArray<TContent, TMode>, TMode>
        ) : never
    );

    export type ResolvePlainTuple<TContent, TMode extends ZuordCore.Mode.Field> = (
        TContent extends ZuordType.EndingTupleWith<infer TRest, infer TLast> ? (
            TRest["length"] extends 0 ? TLast : 
            TRest["length"] extends 1 ? Integrate.Unknown<TRest[0], TLast, TMode> 
            : Integrate.Unknown<ResolvePlainTuple<TRest, TMode>, TLast, TMode>
        ) : never
    );

    export type ResolvePlainArray<TContent, TMode extends ZuordCore.Mode.Field> = TContent extends readonly (infer TInfer extends ZuordType.Plain)[] ? (
        ZuordUtil.Only.Required<TInfer, TMode>
    ) : never;
}