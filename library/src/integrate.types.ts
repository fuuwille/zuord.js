import { InternalZuord as Internal } from "./internal";
import { integrateMode } from "./integrate";

export type Integrate<A, B, TMode extends IntegrateMode = typeof integrateMode> = Internal.Integrate<A, B, TMode>;

export type IntegrateMode = Internal.IntegrateMode;