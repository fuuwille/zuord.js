import { InternalZuord } from "./internal";
import { ZuordUtil } from "@zuord/util";

export type Impose<TBase, TPatch extends ZuordUtil.Partialize<TBase>, TCurrent extends TBase = TBase> = InternalZuord.Impose<TBase, TPatch, TCurrent>;

export type ImposeStrict<TBase, TPatch extends TBase, TCurrent extends TBase = TBase> = InternalZuord.Impose<TBase, TPatch, TCurrent>;

export type ImposeLoose<TBase, TPatch, TCurrent extends TBase = TBase> = InternalZuord.Impose<TBase, TPatch, TCurrent>;