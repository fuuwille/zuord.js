import * as Zuord from "@/core/alias.types"
import * as ZuordUtil from "@/util/alias.types";

type Merge<U extends object[], Mode extends MergeMode | "" = ""> = ZuordUtil.Normalize<MergeRaw<U, Mode>>

type MergeRaw<U extends object[], Mode extends MergeMode | "" = ""> = U extends [...infer Rest extends object[], infer Head extends object]
    ? Zuord.Integrate<MergeRaw<Rest, Mode>, Head, Mode>
    : {};

type MergeMode = Zuord.IntegrateMode;

type MergeOptions<U extends object[], M extends MergeMode[]> = {
    content : [...U];
    mode? : [...M];
}

export type { Merge as ZuordMerge};
export type { MergeRaw as ZuordMergeRaw };
export type { MergeMode as ZuordMergeMode };
export type { MergeOptions as ZuordMergeOptions };