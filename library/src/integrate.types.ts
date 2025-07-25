import { InternalZuord as Internal } from "./internal";
import { integrateMode } from "./integrate";
import { ZuordCore } from "@zuord/core";
import { ZuordShape } from "./shape";

export type Integrate<A extends ZuordShape.Integrate, B extends ZuordShape.Integrate, TMode extends Partial<IntegrateMode> = {}> = Internal.Integrate<A, B, ZuordCore.ModeResolve<[typeof integrateMode, TMode]>>;

export type IntegrateMode = Internal.IntegrateMode;