import { internalZuord as internal, InternalZuord as Internal } from "./internal";

export type Integrate<A, B, TMode extends IntegrateBaseMode = typeof internal.integrateBaseMode> = Internal.Integrate<A, B, TMode>;

export type IntegrateBaseMode = Internal.IntegrateBaseMode;