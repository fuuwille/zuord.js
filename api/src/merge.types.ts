import { Zuord } from "./alias.types"
import { ZuordType } from "./type/_alias.types";

type Merge<U extends any, Options extends MergeOptions = MergeDefaultOptions> = Zuord.Normalize<MergeRaw<U, Options>, Options>

type MergeRaw<U extends any, Options extends MergeOptions = MergeDefaultOptions> = (ZuordType.ArrayDepth<U> extends 1 ? (
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

type MergeOptions<Mode extends MergeMode = MergeMode> = Zuord.Options<Mode>;

type MergePartialOptions = Partial<MergeOptions>;

type MergeDefaultOptions = Zuord.ResolveOptions<{
    mode: MergeDefaultMode;
}, Zuord.DefaultOptions>;

type MergeResolveOptions<T extends Zuord.Optional<MergeOptions>, R extends MergeOptions = MergeDefaultOptions> = Zuord.ResolveOptions<T, R>;

type MergeMode = Zuord.IntegrateMode;

type MergeDefaultMode = Zuord.DefaultMode & {
    concat: true;
};

export type { Merge as ZuordMerge};
export type { MergeRaw as ZuordMergeRaw };
export type { MergeOptions as ZuordMergeOptions };
export type { MergePartialOptions as ZuordMergePartialOptions };
export type { MergeDefaultOptions as ZuordMergeDefaultOptions };
export type { MergeResolveOptions as ZuordMergeResolveOptions };
export type { MergeMode as ZuordMergeMode };
export type { MergeDefaultMode as ZuordMergeDefaultMode };