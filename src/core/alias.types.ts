import { ZuordUtil } from "@/util/alias.types";
import type { ZuordOptions, ZuordDefaultOptions, ZuordResolvedOptions } from "./options.types";
import type { ZuordIgnored, ZuordDefaultIgnored, ZuordWithIgnored } from "./ignored.types";
import type { ZuordNormalize, ZuordNormalizeOptions, ZuordNormalizeDefaultOptions, ZuordNormalizeWithOptions } from "./normalize.types";
import type { ZuordPattern, ZuordPatternRaw } from "./pattern.types";
import type { ZuordMerge } from "./merge.types";
import type { ZuordMergeRaw } from "./merge.types";
import type { ZuordMergeMode } from "./merge.types";
import type { ZuordMergeOptions } from "./merge.types";
import type { ZuordIntegrate } from "./integrate.types";
import type { ZuordIntegrateMode } from "./integrate.types";
import type { ZuordOmit } from "./omit.types";
import type { ZuordOmitRaw } from "./omit.types";
import type { ZuordOmitOf } from "./omit.types";
import type { ZuordPick } from "./pick.types";
import type { ZuordPickRaw } from "./pick.types";
import type { ZuordPickOf } from "./pick.types";

/**
 * 
 */
export namespace Zuord {

    // OPTIONS

    /**
     * 
     */
    export type Options = ZuordOptions;

    /**
     * 
     */
    export type DefaultOptions = ZuordDefaultOptions;

    /**
     * 
     */
    export type ResolvedOptions<T extends Partial<Zuord.Options>> = ZuordResolvedOptions<T>;


    // IGNORED

    /**
     * 
     */
    export type Ignored = ZuordIgnored;

    /**
     * 
     */
    export type DefaultIgnored = ZuordDefaultIgnored;

    /**
     * 
     */
    export type WithIgnored<T extends Zuord.Ignored> = ZuordWithIgnored<T>;


    // NORMALIZE

    /**
     * 
     */
    export type Normalize<T, O extends Zuord.Options = Zuord.DefaultOptions> = ZuordNormalize<T, O>;

    /**
     * 
     */
    export type NormalizeOptions = ZuordNormalizeOptions;

    /**
     * 
     */
    export type NormalizeDefaultOptions = ZuordNormalizeDefaultOptions;

    /**
     * 
     */
    export type NormalizeWithOptions<T extends Partial<Zuord.NormalizeOptions>> = ZuordNormalizeWithOptions<T>;


    // PATTERN

    /**
     * 
     */
    export type Pattern<T> = ZuordPattern<T>;

    /**
     * 
     */
    export type PatternRaw<T> = ZuordPatternRaw<T>;


    // MERGE

    /**
     * 
     */
    export type Merge<U extends any, Mode extends ZuordUtil.Mode<MergeMode> = ""> = ZuordMerge<U, Mode>;

    /**
     * 
     */
    export type MergeRaw<U extends any, Mode extends ZuordUtil.Mode<MergeMode> = ""> = ZuordMergeRaw<U, Mode>;

    /**
     * 
     */
    export type MergeMode = ZuordMergeMode;

    /**
     * 
     */
    export type MergeOptions<U extends object[], M extends ZuordMergeMode[] = []> = ZuordMergeOptions<U, M>;

    // INTEGRATE

    /**
     * 
     */
    export type Integrate<A, B, M extends ZuordUtil.Mode<Zuord.IntegrateMode> = ""> = ZuordIntegrate<A, B, M>;

    /**
     * 
     */
    export type IntegrateMode = ZuordIntegrateMode;

    // OMIT

    /**
     * 
     */
    export type Omit<A, B> = ZuordOmit<A, B>;

    /**
     * 
     */
    export type OmitRaw<A, B> = ZuordOmitRaw<A, B>;

    /**
     * 
     */
    export type OmitOf<A, B> = ZuordOmitOf<A, B>;

    // PICK

    /**
     * 
     */
    export type Pick<A, B> = ZuordPick<A, B>;

    /**
     * 
     */
    export type PickRaw<A, B> = ZuordPickRaw<A, B>;

    /**
     * 
     */
    export type PickOf<A, B> = ZuordPickOf<A, B>;
}