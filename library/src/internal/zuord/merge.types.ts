import { Integrate } from "./integrate.types";
import { ZuordType } from "@zuord/type";
import { ZuordCore } from "@zuord/core";
import { ZuordUtil } from "@zuord/util";

export declare namespace Merge {
    export type Plain<TContent, TMode extends ZuordCore.Mode.Field> = (
        Merge.ResolvePlain<TContent, TMode> extends infer TResolved extends ZuordType.Plain ? (
            ZuordUtil.Unify.Hybrid<TResolved, ZuordCore.Mode.Resolve<[TMode, { 
                unifyPlain: TContent extends ZuordType.PureTuple ? false : true
            }]>>
        ) : never
    )

    export type ResolvePlain<TContent, TMode extends ZuordCore.Mode.Field> = (
        [TContent] extends [ZuordType.PureTuple] ? (
            BuildPlain<TContent, TMode>
        ) : 
        [TContent] extends [ZuordType.ArrayOf<infer TInfer extends ZuordType.Plain>] ? (
            ZuordUtil.Only.Required<TInfer, TMode>
        ) : never
    );

    export type BuildPlain<TContent, TMode extends ZuordCore.Mode.Field> = (
        TContent extends ZuordType.EndingTupleWith<infer TRest extends ZuordType.Plain[], infer TLast extends ZuordType.Plain> ? (
            TRest["length"] extends 0 ? TLast : 
            TRest["length"] extends 1 ? Integrate.Plain<TRest[0], TLast, TMode> 
            : Integrate.Plain<BuildPlain<TRest, TMode>, TLast, TMode>
        ) : never
    ) extends infer TPlain extends ZuordType.Plain ? TPlain : never;

    export type Array<TContent extends ZuordType.Array, TMode extends ZuordCore.Mode.Field> = (
        Merge.ResolveArray<TContent, TMode>
    );

    export type ResolveArray<TContent, TMode extends ZuordCore.Mode.Field> = (
        [TContent] extends [ZuordType.Tuple] ? BuildArray<TContent, TMode> : 
        [TContent] extends [ZuordType.ArrayOf<infer TInfer extends ZuordType.Array>] ? TInfer : never
    )

    export type BuildArray<TContent, TMode extends ZuordCore.Mode.Field> = (
        TContent extends ZuordType.EndingTupleWith<infer TRest extends ZuordType.Array[], infer TLast extends ZuordType.Array> ? (
            TRest["length"] extends 0 ? TLast : 
            TRest["length"] extends 1 ? Integrate.Array<TRest[0], TLast, TMode> : 
            Integrate.Array<BuildArray<TRest, TMode>, TLast, TMode>
        ) : never
    );
}