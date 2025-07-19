import { InternalZuord } from "./index"
import { ZuordType } from "@zuord/type";

export type Merge<U, TMode extends MergeBaseMode = MergeDefaultMode> = (ZuordType.ArrayDepth<U> extends 1 ? (
    U extends [...infer Rest, infer Head] ? (
        InternalZuord.Integrate<Merge<Rest, TMode>, Head, TMode>
    ) : {}
) :
    ZuordType.ArrayInfer<U> extends infer TInfer ? (
        TInfer extends ZuordType.Array ? (
            { [K in keyof U]: Merge<U[K], TMode> }
        ) : U
    ) : {}
);

export type MergeBaseMode = InternalZuord.IntegrateBaseMode;

export type MergeDefaultMode = InternalZuord.IntegrateDefaultMode;