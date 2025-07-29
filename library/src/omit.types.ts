import { InternalZuord as Internal } from "./internal";
import { ShapeZuord as Shape } from "./shape";

export type Omit<TPlain extends Shape.OmitPlain, TPattern extends Shape.OmitPattern<TPlain, TPattern>> = Internal.Omit.Plain<TPlain, TPattern>;

export type OmitLoose<TPlain extends Shape.OmitPlain, TPattern extends Shape.OmitPatternLoose<TPlain>> = Internal.Omit.Plain<TPlain, TPattern>;