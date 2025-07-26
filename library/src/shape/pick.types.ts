import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export type PickSource = Type.Plain;

export type PickPattern<TPlain extends PickSource> = Util.Pattern<TPlain>; 