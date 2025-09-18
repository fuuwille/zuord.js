import type { $Produce } from ".";
import type { FundType } from "@zuord/type";
import type { Zuord } from "zuord";
import type { TypeUtil } from "@zuord/util";

/**
 * @internal
 */
export type Plain<TBase, TContent, TMode> = (
    [TMode] extends [Zuord.ModeRecord] ? (
        [ResolvePlain<TBase, TContent, TMode>] extends [infer TResolved extends FundType.Plain] ? (
            TypeUtil.Unify.Hybrid<TResolved, TMode>
        ) : never
    ) : never
)

/**
 * @internal
 */
export type ResolvePlain<TBase, TContent, TMode extends Zuord.ModeRecord> 
    = $Produce.Integrate.ResolvePlain<TBase, $Produce.Merge.ResolvePlain<TContent, TMode>, TMode>;