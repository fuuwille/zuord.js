import type { $ZuordProduce } from ".";
import type { ZuordType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";
import type { ZuordUtil } from "@zuord/util";

/**
 * @internal
 */
export type Plain<TBase, TContent, TMode> = (
    [TMode] extends [ZuordCore.ModeRecord] ? (
        [ResolvePlain<TBase, TContent, TMode>] extends [infer TResolved extends ZuordType.Plain] ? (
            ZuordUtil.Unify.Hybrid<TResolved, TMode>
        ) : never
    ) : never
)

/**
 * @internal
 */
export type ResolvePlain<TBase, TContent, TMode extends ZuordCore.ModeRecord> 
    = $ZuordProduce.Integrate.ResolvePlain<TBase, $ZuordProduce.Merge.ResolvePlain<TContent, TMode>, TMode>;