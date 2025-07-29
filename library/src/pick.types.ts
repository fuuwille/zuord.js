import { InternalZuord as Internal } from "./internal";
import { ShapeZuord as Shape } from "./shape";

export declare namespace Pick {
    export type Plain<TPlain extends Shape.OmitPlain, TPattern extends Shape.OmitPattern<TPlain, TPattern>> = Internal.Pick.Plain<TPlain, TPattern>;

    export type PlainLoose<TPlain extends Shape.OmitPlain, TPattern extends Shape.OmitPatternLoose<TPlain>> = Internal.Pick.Plain<TPlain, TPattern>;
}