import { ZuordType } from "@zuord/type";
import { InternalZuordUtil as Internal } from "./internal";

export type Exact<TBase extends ZuordType.Plain, TContent extends TBase> = Internal.ExactKeys<TBase, TContent>;

export type ExactKeys<TBase extends ZuordType.Plain, TContent extends ZuordType.Plain> = Internal.ExactKeys<TBase, TContent>;