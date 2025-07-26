import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export type PickPlain = Type.Plain;

export type PickPattern<TPlain extends PickPlain> = Util.Pattern<TPlain>; 