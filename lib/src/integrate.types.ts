import { InternalZuord } from "./internal";

export type Integrate<A, B, TMode extends IntegrateBaseMode = IntegrateDefaultMode> = InternalZuord.Integrate<A, B, TMode>;

export type IntegrateBaseMode = InternalZuord.IntegrateBaseMode;

export type IntegrateDefaultMode = InternalZuord.IntegrateDefaultMode;