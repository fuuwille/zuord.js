import { Zuord } from "./index"
import { ZuordType } from "@zuord/type";

export type Merge<U extends any, Options extends MergeOptions = MergeDefaultOptions> = Zuord.Normalize<MergeRaw<U, Options>, Options>

export type MergeRaw<U extends any, Options extends MergeOptions = MergeDefaultOptions> = (ZuordType.ArrayDepth<U> extends 1 ? (
    U extends [...infer Rest extends object[], infer Head extends object] ? (
        Zuord.IntegrateRaw<MergeRaw<Rest, Options>, Head, Options>
    ) : {}
) :
    U extends (infer Inner)[] ? (
        Inner extends object[] ? (
            { [K in keyof U]: MergeRaw<U[K], Options> }
        ) : U
    ) : {}
);

export type MergeOptions<Mode extends MergeMode = MergeMode> = Zuord.Options<Mode>;

export type MergePartialOptions = Partial<MergeOptions>;

export type MergeDefaultOptions = Zuord.ResolveOptions<{
    mode: MergeDefaultMode;
}, Zuord.DefaultOptions>;

export type MergeResolveOptions<T extends Zuord.Optional<MergeOptions>, R extends MergeOptions = MergeDefaultOptions> = Zuord.ResolveOptions<T, R>;

export type MergeMode = Zuord.IntegrateMode;

export type MergeDefaultMode = Zuord.DefaultMode & {
    concat: true;
};