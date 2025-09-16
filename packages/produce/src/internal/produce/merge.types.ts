import type { $ZuordProduce } from ".";
import type { ZuordType, ZuordTuple } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";
import type { ZuordUtil as Util } from "@zuord/util";

/**
 * @internal
 */
export type Plain<TContent, TMode> = (
    [TMode] extends [infer TMode extends Core.ModeRecord] ? (
        ResolvePlain<TContent, TMode> extends infer TResolved extends ZuordType.Plain ? (
            Util.Unify.Hybrid<TResolved, Core.ModeResolve<[TMode, { 
                unifyPlain: TContent extends ZuordTuple.Nest ? false : true
            }]>>
        ) : never
    ) : never
)

/**
 * @internal
 */
export type Array<TContent extends ZuordType.Array, TMode extends Core.ModeRecord> = (
    [TMode] extends [infer TMode extends Core.ModeRecord] ? (
        [ResolveArray<TContent, TMode>] extends [infer TResolved extends ZuordType.Array] ? (
            Util.Unify.Hybrid<TResolved, TMode>
        ) : never
    ) : never
);

//

/**
 * @internal
 */
export type ResolvePlain<TContent, TMode extends Core.ModeRecord> = (
    [TContent] extends [ZuordTuple.Nest] ? BuildPlain<TContent, TMode> : 
    [TContent] extends [ZuordType.Array<infer TInfer extends ZuordType.Plain>] ? Util.Only.Required<TInfer, TMode> : never
);

/**
 * @internal
 */
export type BuildPlain<TContent, TMode extends Core.ModeRecord> = (
    TContent extends ZuordTuple.Last<infer TLast extends ZuordType.Plain ,infer TRest extends ZuordType.Plain[]> ? (
        TRest["length"] extends 0 ? TLast : 
        TRest["length"] extends 1 ? $ZuordProduce.Integrate.ResolvePlain<TRest[0], TLast, TMode> 
        : $ZuordProduce.Integrate.ResolvePlain<BuildPlain<TRest, TMode>, TLast, TMode>
    ) : never
) extends infer TPlain extends ZuordType.Plain ? TPlain : never;

/**
 * @internal
 */
export type ResolveArray<TContent, TMode extends Core.ModeRecord> = (
    [TContent] extends [ZuordTuple.Nest] ? BuildArray<Util.Mutable.Hybrid<TContent>, TMode> : 
    [TContent] extends [ZuordType.Array<infer TInfer extends ZuordType.Array>] ? TInfer : never
)

/**
 * @internal
 */
export type BuildArray<TContent, TMode extends Core.ModeRecord> = (
    TContent extends ZuordTuple.Last<infer TLast extends ZuordType.Array, infer TRest extends ZuordType.Array[]> ? (
        TRest["length"] extends 0 ? TLast : 
        TRest["length"] extends 1 ? $ZuordProduce.Integrate.ResolveArray<TRest[0], TLast, { concat: true }> : 
        $ZuordProduce.Integrate.ResolveArray<BuildArray<TRest, TMode>, TLast, { concat: true }>
    ) : never
);