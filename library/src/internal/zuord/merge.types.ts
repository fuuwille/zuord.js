import { Integrate } from "./integrate.types";
import { ZuordType } from "@zuord/type";
import { ZuordCore } from "@zuord/core";
import { ZuordUtil } from "@zuord/util";

export declare namespace Merge {
    export type ResolvePlain<TContent, TMode extends ZuordCore.Mode.Field> = (
        [TContent] extends [ZuordType.PureTuple] ? (
            ResolvePlainFromTuple<TContent, TMode>
        ) : 
        [TContent] extends [ZuordType.Array] ? (
            ResolvePlainFromArray<TContent, TMode>
        ) : never
    );

    export type ResolvePlainFromTuple<TContent, TMode extends ZuordCore.Mode.Field> = (
        TContent extends ZuordType.EndingTupleWith<infer TRest, infer TLast> ? (
            TRest["length"] extends 0 ? TLast : 
            TRest["length"] extends 1 ? Integrate.Unknown<TRest[0], TLast, TMode> 
            : Integrate.Unknown<ResolvePlainFromTuple<TRest, TMode>, TLast, TMode>
        ) : never
    );

    export type ResolvePlainFromArray<TContent, TMode extends ZuordCore.Mode.Field> = (
        TContent extends ZuordType.ArrayOf<infer TInfer extends ZuordType.Plain> ? (
            ZuordUtil.Only.Required<TInfer, TMode>
        ) : never
    )

    export type ResolveUnifiedPlain<TContent, TMode extends ZuordCore.Mode.Field> = (
        Merge.ResolvePlain<TContent, TMode> extends infer TResolved extends ZuordType.Plain ? (
            ZuordUtil.Unify.Hybrid<TResolved, ZuordCore.Mode.Resolve<[TMode, { 
                unifyPlain: TContent extends ZuordType.PureTuple ? false : true
            }]>>
        ) : never
    )
}