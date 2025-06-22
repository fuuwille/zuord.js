import { Zuord } from "@/core/alias.types"
import { ZuordUtil } from "@/util/alias.types";

type Merge<U extends any, Mode extends ZuordUtil.Mode<MergeMode> = ""> = Zuord.Normalize<MergeRaw<U, Mode>>

type MergeRaw<U extends any, Mode extends ZuordUtil.Mode<MergeMode> = ""> = (ZuordUtil.ArrayDepth<U> extends 1 ? (
    U extends [...infer Rest extends object[], infer Head extends object] ? (
        Zuord.Integrate<MergeRaw<Rest, Mode>, Head, Mode>
    ) : {}
) :
    U extends (infer Inner)[] ? (
        Inner extends object[] ? (
            { [K in keyof U]: MergeRaw<U[K], Mode> }
        ) : U
    ) : {}
);

/**
 * MergeMode defines the modes available for merging objects.
 */
type MergeMode = Zuord.IntegrateMode;

type MergeOptions<U extends object[], M extends MergeMode[]> = {
    content : [...U];
    mode? : [...M];
}

export type { Merge as ZuordMerge};
export type { MergeRaw as ZuordMergeRaw };
export type { MergeMode as ZuordMergeMode };
export type { MergeOptions as ZuordMergeOptions };