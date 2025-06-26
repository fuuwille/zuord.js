import { Zuord } from "@/core/alias.types"
import { ZuordUtil } from "@/util/alias.types";

type Merge<U extends any, Mode extends ZuordUtil.Mode<MergeMode> = ""> = Zuord.Normalize<MergeRaw<U, Mode>>

type MergeRaw<U extends any, Mode extends ZuordUtil.Mode<MergeMode> = ""> = (ZuordUtil.ArrayDepth<U> extends 1 ? (
    U extends [...infer Rest extends object[], infer Head extends object] ? (
        Zuord.Integrate<MergeRaw<Rest, Mode>, Head, Mode>
    ) : {}
) :
    U extends (infer Inner)[] ? (
        Inner extends object[] ? (
            { [K in keyof U]: MergeRaw<U[K], Mode> }
        ) : U
    ) : {}
);

type MergeOptions = Zuord.ResolveOptions<{
    mode: MergeMode[];
}, Zuord.Options>;

type MergeDefaultOptions = Zuord.ResolveOptions<{
    mode: ["concat"];
}>;

type MergeResolveOptions<T extends Partial<MergeOptions>, R extends MergeOptions = MergeDefaultOptions> = MergeOptions & Zuord.ResolveOptions<T, R>;

type MergeMode = Zuord.IntegrateMode;

type MergeData<U extends object[], M extends MergeMode[]> = {
    content : [...U];
    mode? : [...M];
}

export type { Merge as ZuordMerge};
export type { MergeRaw as ZuordMergeRaw };
export type { MergeOptions as ZuordMergeOptions };
export type { MergeDefaultOptions as ZuordMergeDefaultOptions };
export type { MergeResolveOptions as ZuordMergeResolveOptions };
export type { MergeMode as ZuordMergeMode };
export type { MergeData as ZuordMergeData };