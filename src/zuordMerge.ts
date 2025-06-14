import { ZuordNormalize } from "./zuordNormalize";

export type ZuordMerge<U extends object[]> = ZuordNormalize<ZuordMergeRaw<U>>

export default ZuordMerge;

//

export type ZuordMergeRaw<U extends object[]> = U extends [infer Head extends object, ...infer Rest extends object[]]
    ? Head & ZuordMerge<Rest>
    : {};