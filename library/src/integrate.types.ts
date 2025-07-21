import { internalZuord as internal, InternalZuord as Internal } from "./internal";

export type Integrate<A, B, TMode extends IntegrateMode = typeof internal.integrateMode> = Internal.Integrate<A, B, TMode>;

export type IntegrateMode = Internal.IntegrateMode;