import type { $ZuordUtil } from "../../internal";
import type { ZuordType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";

export type Required<T extends ZuordType.Plain, TMode extends ZuordCore.ModeRecord> = $ZuordUtil.Only.ResolveRequired<T, TMode>;