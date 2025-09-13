import type { $Zuord } from ".";
import type { ZuordType, ZuordTuple } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";
import type { ZuordUtil as Util } from "@zuord/util";

export type Plain<TContent, TMode extends Core.ModeRecord> = (
    ResolvePlain<TContent, TMode> extends infer TResolved extends ZuordType.Plain ? (
        Util.Unify.Hybrid<TResolved, Core.ModeResolve<[TMode, { 
            unifyPlain: TContent extends ZuordTuple.Nest ? false : true
        }]>>
    ) : never
)

export type ResolvePlain<TContent, TMode extends Core.ModeRecord> = (
    [TContent] extends [ZuordTuple.Nest] ? BuildPlain<TContent, TMode> : 
    [TContent] extends [ZuordType.Array<infer TInfer extends ZuordType.Plain>] ? Util.Only.Required<TInfer, TMode> : never
);

export type BuildPlain<TContent, TMode extends Core.ModeRecord> = (
    TContent extends ZuordTuple.Last<infer TLast extends ZuordType.Plain ,infer TRest extends ZuordType.Plain[]> ? (
        TRest["length"] extends 0 ? TLast : 
        TRest["length"] extends 1 ? $Zuord.Integrate.ResolvePlain<TRest[0], TLast, TMode> 
        : $Zuord.Integrate.ResolvePlain<BuildPlain<TRest, TMode>, TLast, TMode>
    ) : never
) extends infer TPlain extends ZuordType.Plain ? TPlain : never;

export type Array<TContent extends ZuordType.Array, TMode extends Core.ModeRecord> = (
    [ResolveArray<TContent, TMode>] extends [infer TResolved extends ZuordType.Array] ? (
        Util.Unify.Hybrid<TResolved, TMode>
    ) : never
);

export type ResolveArray<TContent, TMode extends Core.ModeRecord> = (
    [TContent] extends [ZuordTuple.Nest] ? BuildArray<Util.Mutable.Hybrid<TContent>, TMode> : 
    [TContent] extends [ZuordType.Array<infer TInfer extends ZuordType.Array>] ? TInfer : never
)

export type BuildArray<TContent, TMode extends Core.ModeRecord> = (
    TContent extends ZuordTuple.Last<infer TLast extends ZuordType.Array, infer TRest extends ZuordType.Array[]> ? (
        TRest["length"] extends 0 ? TLast : 
        TRest["length"] extends 1 ? $Zuord.Integrate.ResolveArray<TRest[0], TLast, { concat: true }> : 
        $Zuord.Integrate.ResolveArray<BuildArray<TRest, TMode>, TLast, { concat: true }>
    ) : never
);