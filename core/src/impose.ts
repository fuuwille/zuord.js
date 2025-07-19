import { InternalZuord } from "./internal";

export type Impose<TBase, TPatch extends InternalZuord.Optional<TBase>, TCurrent extends TBase = TBase> = InternalZuord.Impose<TBase, TPatch, TCurrent>;

export type ImposeLoose<TBase, TPatch, TCurrent extends TBase = TBase> = InternalZuord.ImposeLoose<TBase, TPatch, TCurrent>;