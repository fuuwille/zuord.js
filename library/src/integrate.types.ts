import { InternalZuord as Internal } from "./internal";
import { integrateMode } from "./integrate";
import { ZuordCore } from "@zuord/core";
import { ShapeZuord as Shape } from "./shape";

export type Integrate<A extends Shape.IntegrateElement, B extends Shape.IntegrateElement, TMode extends Shape.IntegrateMode = {}> = Internal.Integrate<A, B, ZuordCore.ModeResolve<[typeof integrateMode, TMode]>>;

export type IntegrateMode = Internal.IntegrateMode;