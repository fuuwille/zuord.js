import { InternalZuord as Internal } from "./internal";
import { ShapeZuord as Shape } from "./shape";
import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export type Pick<TSouce extends Shape.PickSource, TPattern extends PickPattern<TSouce, TPattern>> = Internal.Pick<TSouce, TPattern>;

export type PickLoose<TSouce extends Shape.PickSource, TPattern extends Shape.PickPattern<TSouce>> = Internal.Pick<TSouce, TPattern>;

export type PickPattern<TSouce extends Shape.PickSource, TPattern extends Type.Plain> = Util.ExactKeys<Shape.PickPattern<TSouce>, TPattern>