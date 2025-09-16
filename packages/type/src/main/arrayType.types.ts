import type { FundType } from ".";

export type Nest<T extends unknown = unknown> = FundType.Array<FundType.Array<T>>;

export type Empty = readonly [];