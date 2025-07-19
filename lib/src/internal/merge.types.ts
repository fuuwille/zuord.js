import { InternalZuord } from "./index"
import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";

export type Merge<U, TMode extends MergeBaseMode = MergeDefaultMode> = (ZuordType.ArrayDepth<U> extends 1 ? (
    U extends [...infer Rest extends object[], infer Head extends object] ? (
        InternalZuord.Integrate<Merge<Rest, TMode>, Head, TMode>
    ) : {}
) :
    ZuordType.ArrayInfer<U> extends infer TInfer ? (
        TInfer extends ZuordType.Array ? (
            { [K in keyof U]: Merge<U[K], TMode> }
        ) : U
    ) : {}
);

export type MergeBaseMode = ZuordCore.ModeOf<[InternalZuord.IntegrateBaseMode]>;

export type MergeDefaultMode = ZuordCore.ModeFrom<MergeBaseMode, {
    concat: true;
}, InternalZuord.IntegrateDefaultMode>;