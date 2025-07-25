import { ZuordType } from "@zuord/type";
import { ZuordUtil } from "@zuord/util";
import { InternalZuord } from "./internal";

export type Pick<TShape extends ZuordType.Plain, TPattern extends ZuordUtil.Pattern<TShape>> = InternalZuord.Pick<TShape, TPattern>;