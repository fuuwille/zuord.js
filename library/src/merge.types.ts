import { InternalZuord as Internal } from "./internal";
import { ZuordType } from "@zuord/type";

export type Merge<TContent extends ZuordType.Plain[], TMode extends Partial<MergeMode>> = Internal.Merge<TContent, TMode>;

export type MergeMode = Internal.MergeMode;