import { InternalZuord as Internal } from "./internal";
import { mergeMode } from "./merge";
import { ZuordUtil } from "@zuord/util";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";

export type Merge<TContent extends ZuordType.Plain[], TMode extends MergeMode = typeof mergeMode> = Internal.Merge<TContent, TMode>;

export type MergeMode = Internal.MergeMode;