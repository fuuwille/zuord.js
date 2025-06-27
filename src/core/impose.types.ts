import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Impose<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeRaw<TBase, TPatch, TCurrent>>;

type ImposeRaw<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = (
    ZuordUtil.IsPlain<TBase> extends true ? ({
        [K in keyof TCurrent]: K extends keyof TBase ? (
            TCurrent[K] extends object ? (TPatch[K] extends object ? (
                ImposeRaw<TBase[K], TPatch[K], TCurrent[K]>
            ) : TCurrent[K] ) : K extends keyof TPatch ? TPatch[K] : TCurrent[K]
        ) : unknown;
    }) : TPatch
);