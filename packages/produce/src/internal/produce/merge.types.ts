import type { $Produce } from ".";
import type { FundType, TupleType } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";
import type { TypeUtil as Util } from "@zuord/util";

/**
 * @internal
 */
export type Plain<TContent, TMode> = (
    [TMode] extends [infer TMode extends Core.ModeRecord] ? (
        ResolvePlain<TContent, TMode> extends infer TResolved extends FundType.Plain ? (
            Util.Unify.Hybrid<TResolved, Core.ModeResolve<[TMode, { 
                unifyPlain: TContent extends TupleType.Nest ? false : true
            }]>>
        ) : never
    ) : never
)

/**
 * @internal
 */
export type Array<TContent extends FundType.Array, TMode extends Core.ModeRecord> = (
    [TMode] extends [infer TMode extends Core.ModeRecord] ? (
        [ResolveArray<TContent, TMode>] extends [infer TResolved extends FundType.Array] ? (
            Util.Unify.Hybrid<TResolved, TMode>
        ) : never
    ) : never
);

//

/**
 * @internal
 */
export type ResolvePlain<TContent, TMode extends Core.ModeRecord> = (
    [TContent] extends [TupleType.Nest] ? BuildPlain<TContent, TMode> : 
    [TContent] extends [FundType.Array<infer TInfer extends FundType.Plain>] ? Util.Only.Required<TInfer, TMode> : never
);

/**
 * @internal
 */
export type BuildPlain<TContent, TMode extends Core.ModeRecord> = (
    TContent extends TupleType.Last<infer TLast extends FundType.Plain ,infer TRest extends FundType.Plain[]> ? (
        TRest["length"] extends 0 ? TLast : 
        TRest["length"] extends 1 ? $Produce.Integrate.ResolvePlain<TRest[0], TLast, TMode> 
        : $Produce.Integrate.ResolvePlain<BuildPlain<TRest, TMode>, TLast, TMode>
    ) : never
) extends infer TPlain extends FundType.Plain ? TPlain : never;

/**
 * @internal
 */
export type ResolveArray<TContent, TMode extends Core.ModeRecord> = (
    [TContent] extends [TupleType.Nest] ? BuildArray<Util.Mutable.Hybrid<TContent>, TMode> : 
    [TContent] extends [FundType.Array<infer TInfer extends FundType.Array>] ? TInfer : never
)

/**
 * @internal
 */
export type BuildArray<TContent, TMode extends Core.ModeRecord> = (
    TContent extends TupleType.Last<infer TLast extends FundType.Array, infer TRest extends FundType.Array[]> ? (
        TRest["length"] extends 0 ? TLast : 
        TRest["length"] extends 1 ? $Produce.Integrate.ResolveArray<TRest[0], TLast, { concat: true }> : 
        $Produce.Integrate.ResolveArray<BuildArray<TRest, TMode>, TLast, { concat: true }>
    ) : never
);