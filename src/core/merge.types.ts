import * as Zuord from "@/core/alias.types"
import * as ZuordUtil from "@/util/alias.compile";

type Merge<U extends object[], Mode extends Zuord.IntegrateModeType = ""> = ZuordUtil.Normalize<MergeRaw<U, Mode>>

type MergeRaw<U extends object[], Mode extends Zuord.IntegrateModeType = ""> = U extends [...infer Rest extends object[], infer Head extends object]
    ? Zuord.Integrate<MergeRaw<Rest, Mode>, Head, Mode>
    : {};

export type { Merge as ZuordMerge};
export type { MergeRaw as ZuordMergeRaw };