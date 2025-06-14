export type ZuordMerge<U extends object[]> = U extends [infer Head, ...infer Rest]
    ? Head & ZuordMerge<Rest extends object[] ? Rest : []>
    : {};

export default ZuordMerge;