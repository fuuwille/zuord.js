import { $ZuordUtil } from "./internal";
import { ZuordType } from "@zuord/type";

export type Pattern<T extends ZuordType.Plain> = $ZuordUtil.Pattern.Resolve<T>;