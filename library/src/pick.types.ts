import { ZuordType } from "@zuord/type";
import { ZuordUtil } from "@zuord/util";
import { InternalZuord as Internal } from "./internal";

export type Pick<TShape extends ZuordType.Plain, TPattern extends ZuordUtil.Exact<ZuordUtil.Pattern<TShape>, TPattern>> = Internal.Pick<TShape, TPattern>;