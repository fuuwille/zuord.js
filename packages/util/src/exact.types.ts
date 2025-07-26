import { ZuordType } from "@zuord/type";
import { InternalZuordUtil as Internal } from "./internal";

export type Exact<TBase extends ZuordType.Plain, TContent extends TBase> = Internal.ExactKeys<TBase, TContent>;

export type ExactKeys<TBase extends ZuordType.Plain, TContent> = Internal.ExactKeys<TBase, TContent>;