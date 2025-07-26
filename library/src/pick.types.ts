import { InternalZuord as Internal } from "./internal";
import { ShapeZuord as Shape } from "./shape";

export type Pick<TPlain extends Shape.PickPlain, TPattern extends Shape.PickPattern<TPlain, TPattern>> = Internal.Pick<TPlain, TPattern>;

export type PickLoose<TPlain extends Shape.PickPlain, TPattern extends Shape.PickPatternLoose<TPlain>> = Internal.Pick<TPlain, TPattern>;