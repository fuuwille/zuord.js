export type Plain = {
  [key: PropertyKey]: unknown;
};

export type PlainTuple = readonly [Plain, ...Plain[]];