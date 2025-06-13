export type ZuordContent<U extends object[]> = U extends [infer Head, ...infer Rest]
    ? Head & ZuordContent<Rest extends object[] ? Rest : []>
    : {};

export default ZuordContent;