import { DeepMerge } from "./utils/deepMerge";
import { ZuordNormalize } from "./zuordNormalize";

export type ZuordMerge<U extends object[]> = ZuordNormalize<ZuordMergeRaw<U>>

export type ZuordMergeRaw<U extends object[]> = U extends [...infer Rest extends object[], infer Head extends object]
    ? DeepMerge<ZuordMergeRaw<Rest>, Head>
    : {};