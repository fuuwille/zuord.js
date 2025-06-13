export type ZuordChain<U extends object[]> = U extends [infer Head, ...infer Rest]
    ? Head & ZuordChain<Rest extends object[] ? Rest : []>
    : unknown;