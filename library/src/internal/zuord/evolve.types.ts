import type { $Zuord } from ".";
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
    = $Zuord.Integrate.ResolvePlain<TBase, $Zuord.Merge.ResolvePlain<TContent, TMode>, TMode>;