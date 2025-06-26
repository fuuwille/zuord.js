import { Zuord } from "@/core/alias.types"
import { ZuordUtil } from "@/util/alias.types";

type Merge<U extends any, Options extends MergeOptions = MergeDefaultOptions> = Zuord.Normalize<MergeRaw<U, Options>>

type MergeRaw<U extends any, Options extends MergeOptions = MergeDefaultOptions> = (ZuordUtil.ArrayDepth<U> extends 1 ? (
    U extends [...infer Rest extends object[], infer Head extends object] ? (
        Zuord.Integrate<MergeRaw<Rest, Options>, Head, Options>
    ) : {}
) :
    U extends (infer Inner)[] ? (
        Inner extends object[] ? (
            { [K in keyof U]: MergeRaw<U[K], Options> }
        ) : U
    ) : {}
);

type MergeOptions = Zuord.ResolveOptions<{
    mode: MergeMode;
}, Zuord.Options>;

type MergePartialOptions = Partial<MergeOptions>;

type MergeDefaultOptions = Zuord.ResolveOptions<{
    mode: MergeDefaultMode;
}>;

type MergeResolveOptions<T extends Partial<MergeOptions>, R extends MergeOptions = MergeDefaultOptions> = MergeOptions & Zuord.ResolveOptions<T, R>;

type MergeMode = Zuord.IntegrateMode;

type MergeDefaultMode = "concat";

type MergeData<U extends object[], M extends MergeMode[]> = {
    content : [...U];
    mode? : [...M];
}

export type { Merge as ZuordMerge};
export type { MergeRaw as ZuordMergeRaw };
export type { MergeOptions as ZuordMergeOptions };
export type { MergePartialOptions as ZuordMergePartialOptions };
export type { MergeDefaultOptions as ZuordMergeDefaultOptions };
export type { MergeResolveOptions as ZuordMergeResolveOptions };
export type { MergeMode as ZuordMergeMode };
export type { MergeDefaultMode as ZuordMergeDefaultMode };
export type { MergeData as ZuordMergeData };
