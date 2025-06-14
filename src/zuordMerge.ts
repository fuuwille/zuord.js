export type ZuordMerge<U extends object[]> = U extends [infer Head extends object, ...infer Rest extends object[]]
    ? Head & ZuordMerge<Rest>
    : {};


export default ZuordMerge;