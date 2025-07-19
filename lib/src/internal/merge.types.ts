import { InternalZuord } from "./index"
import { ZuordCore } from "@zuord/core";
import { ZuordUtil } from "@zuord/util";
import { ZuordType } from "@zuord/type";

export type Merge<U, Options extends MergeOptions = MergeDefaultOptions> = (ZuordType.ArrayDepth<U> extends 1 ? (
    U extends [...infer Rest extends object[], infer Head extends object] ? (
        InternalZuord.IntegrateRaw<Merge<Rest, Options>, Head, Options>
    ) : {}
) :
    U extends (infer Inner)[] ? (
        Inner extends object[] ? (
            { [K in keyof U]: Merge<U[K], Options> }
        ) : U
    ) : {}
);

export type MergeOptions<Mode extends MergeMode = MergeMode> = InternalZuord.Options<Mode>;

export type MergePartialOptions = Partial<MergeOptions>;

export type MergeDefaultOptions = InternalZuord.ResolveOptions<{
    mode: MergeDefaultMode;
}, InternalZuord.DefaultOptions>;

export type MergeResolveOptions<T extends ZuordUtil.Partialize<MergeOptions>, R extends MergeOptions = MergeDefaultOptions> = InternalZuord.ResolveOptions<T, R>;

export type MergeMode = InternalZuord.IntegrateMode;

export type MergeDefaultMode = ZuordCore.DefaultMode & {
    concat: true;
};