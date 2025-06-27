import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Impose<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = Zuord.Normalize<ImposeRaw<TBase, TPatch, TCurrent>>;

type ImposeRaw<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = [ZuordUtil.IsNever<TPatch>] extends [false] ? (
    ZuordUtil.HasPlain<TBase> extends true ? ({
        [K in keyof TBase]: K extends keyof TPatch ? Required<Omit<TCurrent[K], keyof NonNullable<TPatch[K]>> & TPatch[K]> : ImposeRaw<TBase[K], TCurrent[K], TCurrent[K]>
    }) : TCurrent
) : TCurrent;

export type { Impose as ZuordImpose };
export type { ImposeRaw as ZuordImposeRaw };