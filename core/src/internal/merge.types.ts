import { InternalZuord } from "./index"
import { ZuordType } from "zuord/type";

export type Merge<U extends any, Options extends MergeOptions = MergeDefaultOptions> = InternalZuord.Normalize<MergeRaw<U, Options>, Options>

export type MergeRaw<U extends any, Options extends MergeOptions = MergeDefaultOptions> = (ZuordType.ArrayDepth<U> extends 1 ? (
    U extends [...infer Rest extends object[], infer Head extends object] ? (
        InternalZuord.IntegrateRaw<MergeRaw<Rest, Options>, Head, Options>
    ) : {}
) :
    U extends (infer Inner)[] ? (
        Inner extends object[] ? (
            { [K in keyof U]: MergeRaw<U[K], Options> }
        ) : U
    ) : {}
);

export type MergeOptions<Mode extends MergeMode = MergeMode> = InternalZuord.Options<Mode>;

export type MergePartialOptions = Partial<MergeOptions>;

export type MergeDefaultOptions = InternalZuord.ResolveOptions<{
    mode: MergeDefaultMode;
}, InternalZuord.DefaultOptions>;

export type MergeResolveOptions<T extends InternalZuord.Optional<MergeOptions>, R extends MergeOptions = MergeDefaultOptions> = InternalZuord.ResolveOptions<T, R>;

export type MergeMode = InternalZuord.IntegrateMode;

export type MergeDefaultMode = InternalZuord.DefaultMode & {
    concat: true;
};