import { InternalZuord as Internal } from "./internal";
import { integrateMode } from "./integrate";
import { ZuordCore } from "@zuord/core";
import { ZuordShape } from "./shape";

export type Integrate<A extends ZuordShape.IntegrateElement, B extends ZuordShape.IntegrateElement, TMode extends Partial<IntegrateMode> = {}> = Internal.Integrate<A, B, ZuordCore.ModeResolve<[typeof integrateMode, TMode]>>;

export type IntegrateMode = Internal.IntegrateMode;