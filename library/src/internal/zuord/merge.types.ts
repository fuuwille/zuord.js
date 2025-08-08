import { $Zuord } from ".";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordUtil as Util } from "@zuord/util";


//

export declare namespace Merge {
    export type Plain<TContent, TMode extends Core.Mode.Field> = (
        Merge.ResolvePlain<TContent, TMode> extends infer TResolved extends Type.Plain ? (
            Util.Unify.Hybrid<TResolved, Core.Mode.Resolve<[TMode, { 
                unifyPlain: TContent extends Type.PureTuple ? false : true
            }]>>
        ) : never
    )

    export type ResolvePlain<TContent, TMode extends Core.Mode.Field> = (
        [TContent] extends [Type.PureTuple] ? BuildPlain<TContent, TMode> : 
        [TContent] extends [Type.ArrayOf<infer TInfer extends Type.Plain>] ? Util.Only.Required<TInfer, TMode> : never
    );

    export type BuildPlain<TContent, TMode extends Core.Mode.Field> = (
        TContent extends Type.EndingTupleWith<infer TRest extends Type.Plain[], infer TLast extends Type.Plain> ? (
            TRest["length"] extends 0 ? TLast : 
            TRest["length"] extends 1 ? $Zuord.Integrate.ResolvePlain<TRest[0], TLast, TMode> 
            : $Zuord.Integrate.ResolvePlain<BuildPlain<TRest, TMode>, TLast, TMode>
        ) : never
    ) extends infer TPlain extends Type.Plain ? TPlain : never;

    export type Array<TContent extends Type.Array, TMode extends Core.Mode.Field> = (
        [Merge.ResolveArray<TContent, TMode>] extends [infer TResolved extends Type.Array] ? (
            Util.Unify.Hybrid<TResolved, TMode>
        ) : never
    );

    export type ResolveArray<TContent, TMode extends Core.Mode.Field> = (
        [TContent] extends [Type.PureTuple] ? BuildArray<Util.Mutable.Hybrid<TContent>, TMode> : 
        [TContent] extends [Type.ArrayOf<infer TInfer extends Type.Array>] ? TInfer : never
    )

    export type BuildArray<TContent, TMode extends Core.Mode.Field> = (
        TContent extends Type.EndingTupleWith<infer TRest extends Type.Array[], infer TLast extends Type.Array> ? (
            TRest["length"] extends 0 ? TLast : 
            TRest["length"] extends 1 ? $Zuord.Integrate.ResolveArray<TRest[0], TLast, { concat: true }> : 
            $Zuord.Integrate.ResolveArray<BuildArray<TRest, TMode>, TLast, { concat: true }>
        ) : never
    );
}