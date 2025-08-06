import { Integrate } from "./integrate.types";
import { ZuordType } from "@zuord/type";
import { ZuordCore } from "@zuord/core";
import { ZuordUtil } from "@zuord/util";

export declare namespace Merge {
    export type ResolvePlainArray<TContent, TMode extends ZuordCore.Mode.Field> = (
        TContent extends ZuordType.PureTuple ? (
            Merge.ResolvePlainTuple<TContent, TMode> extends infer TPlain extends ZuordType.Plain ? (
                ZuordUtil.Unify.Hybrid<TPlain, ZuordCore.Mode.Resolve<[TMode, { unifyPlain: false }]>>
            ) : never
        ) : 
        TContent extends ZuordType.ArrayOf<infer TInfer extends ZuordType.Plain> ? (
            ZuordUtil.Unify.Hybrid<ZuordUtil.Only.Required<TInfer, TMode>, TMode>
        ) : never
    ) extends infer TPlain extends ZuordType.Plain ? TPlain : never;

    export type ResolvePlainTuple<TContent, TMode extends ZuordCore.Mode.Field> = (
        TContent extends ZuordType.EndingTupleWith<infer TRest, infer TLast> ? (
            TRest["length"] extends 0 ? TLast : 
            TRest["length"] extends 1 ? Integrate.Unknown<TRest[0], TLast, TMode> 
            : Integrate.Unknown<ResolvePlainTuple<TRest, TMode>, TLast, TMode>
        ) : never
    );
}