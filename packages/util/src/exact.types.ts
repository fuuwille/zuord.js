import { InternalZuordUtil as Internal } from "./internal";

export type Exact<TBase, TContent> = Internal.Exact<TBase, TContent> extends infer TExact extends TBase ? TExact : never;