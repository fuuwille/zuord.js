import { $Zuord } from ".";
import { ZuordType } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordUtil } from "@zuord/util";

export type Plain<TBase, TContent, TMode extends Core.Mode.Flags> = (
    [ResolvePlain<TBase, TContent, TMode>] extends [infer TResolved extends ZuordType.Plain] ? (
        ZuordUtil.Unify.Hybrid<TResolved, TMode>
    ) : never
)

export type ResolvePlain<TBase, TContent, TMode extends Core.Mode.Flags> 
    = $Zuord.Integrate.ResolvePlain<TBase, $Zuord.Merge.ResolvePlain<TContent, TMode>, TMode>;