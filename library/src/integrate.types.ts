import { InternalZuord as Internal } from "./internal";
import { integrateMode } from "./integrate";
import { ZuordCore } from "@zuord/core";
import { ShapeZuord } from "./shape";

export type Integrate<A extends ShapeZuord.IntegrateElement, B extends ShapeZuord.IntegrateElement, TMode extends Partial<IntegrateMode> = {}> = Internal.Integrate<A, B, ZuordCore.ModeResolve<[typeof integrateMode, TMode]>>;

export type IntegrateMode = Internal.IntegrateMode;