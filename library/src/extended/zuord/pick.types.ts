import type { $Zuord } from "../../internal";
import type { ZuordModeX } from "../mode";
import type { ZuordType } from "@zuord/type";
import type { ZuordUtil } from "@zuord/util";

export type Loose<T extends ZuordType.Plain, P extends ZuordUtil.Pattern.Plain<T>, _TMode extends Partial<ZuordModeX.Pick.Plain> = {}> = $Zuord.Pick.Plain<T, P>;