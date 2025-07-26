import { InternalZuord as Internal } from "./internal";
import { ShapeZuord as Shape } from "./shape";
import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export type Pick<TPlain extends Shape.PickPlain, TPattern extends PickPattern<TPlain, TPattern>> = Internal.Pick<TPlain, TPattern>;

export type PickLoose<TPlain extends Shape.PickPlain, TPattern extends Shape.PickPatternLoose<TPlain>> = Internal.Pick<TPlain, TPattern>;

export type PickPattern<TPlain extends Shape.PickPlain, TPattern extends Type.Plain> = Util.ExactKeys<Shape.PickPatternLoose<TPlain>, TPattern>