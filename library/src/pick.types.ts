import { InternalZuord as Internal } from "./internal";
import { ShapeZuord as Shape } from "./shape";

export type Pick<TPlain extends Shape.PickPlain, TPattern extends Shape.PickExactPattern<TPlain, Shape.PickPattern<TPlain>>> = Internal.Pick<TPlain, TPattern>;

export type PickLose<TPlain extends Shape.PickPlain, TPattern extends Shape.PickPattern<TPlain>> = Internal.Pick<TPlain, TPattern>;