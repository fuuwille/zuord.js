import { internalZuord as internal, InternalZuord } from "./internal";

export type Integrate<A, B, TMode extends IntegrateBaseMode = typeof internal.integrateBaseMode> = InternalZuord.Integrate<A, B, TMode>;

export type IntegrateBaseMode = InternalZuord.IntegrateBaseMode;