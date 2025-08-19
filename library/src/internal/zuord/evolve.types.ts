import { ZuordType } from "@zuord/type";
import { $Zuord } from ".";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordUtil } from "@zuord/util";


export declare namespace Evolve {
    export type Plain<TBase, TContent, TMode extends Core.Mode.Flags> = (
        [Evolve.ResolvePlain<TBase, TContent, TMode>] extends [infer TResolved extends ZuordType.Plain] ? (
            ZuordUtil.Unify.Hybrid<TResolved, TMode>
        ) : never
    )

    export type ResolvePlain<TBase, TContent, TMode extends Core.Mode.Flags> 
        = $Zuord.Integrate.ResolvePlain<TBase, $Zuord.Merge.ResolvePlain<TContent, TMode>, TMode>;
}