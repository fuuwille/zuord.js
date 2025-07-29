import { InternalZuord as Internal } from "./internal";
import { ShapeZuord as Shape } from "./shape";
import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export type Pick<TSouce extends Shape.PickSource, TPattern extends PickPattern<TSouce, TPattern>> = Internal.Pick.Plain<TSouce, TPattern>;

export type PickLoose<TSouce extends Shape.PickSource, TPattern extends Shape.PickPattern<TSouce>> = Internal.Pick.Plain<TSouce, TPattern>;

export type PickPattern<TSouce extends Shape.PickSource, TPattern extends Type.Plain> = Util.Exact.Plain<Shape.PickPattern<TSouce>, TPattern>