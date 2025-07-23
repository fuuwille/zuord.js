export type Plain = {
  [key: PropertyKey]: unknown;
};

export type PlainTuple = readonly [Plain, ...Plain[]];

export type PlainOnlyRequired<T> = T extends Plain ? {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: PlainOnlyRequired<Exclude<T[K], undefined>>;
} : T;