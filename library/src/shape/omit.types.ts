import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export type OmitPlain = Type.Plain;

export type OmitPattern<TPlain extends OmitPlain, TPattern extends Type.Plain> = Util.ExactKeys<OmitPatternLoose<TPlain>, TPattern>

export type OmitPatternLoose<TPlain extends OmitPlain> = Util.Pattern<TPlain>; 