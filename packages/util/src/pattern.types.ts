import { ZuordType } from "@zuord/type";
import { InternalZuordUtil } from "./internal";

export type Pattern<T extends ZuordType.Plain> = InternalZuordUtil.Pattern<T>;