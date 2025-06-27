import type { ZuordMode, ZuordLiteMode, ZuordDefaultMode } from "./mode.types";
import type { ZuordOptions, ZuordDefaultOptions, ZuordResolvedOptions, ZuordOptionsOf } from "./options.types";
import type { ZuordData, ZuordDataOf } from "./data.types";
import type { ZuordOutcast, ZuordOutcastConstructor, ZuordOutcasts, ZuordOutcastConstructors, ZuordDefaultOutcasts, ZuordResolveOutcasts } from "./outcast.types";
import type { ZuordNormalize, ZuordNormalizeOptions, ZuordNormalizeDefaultOptions, ZuordNormalizeResolveOptions } from "./normalize.types";
import type { ZuordPattern, ZuordPatternRaw } from "./pattern.types";
import type { ZuordMerge, ZuordMergeOptions, ZuordMergeDefaultOptions, ZuordMergeResolveOptions } from "./merge.types";
import type { ZuordMergeRaw } from "./merge.types";
import type { ZuordMergeMode, ZuordMergeDefaultMode } from "./merge.types";
import type { ZuordIntegrate, ZuordIntegrateRaw, ZuordIntegrateOptions, ZuordIntegratePartialOptions, ZuordIntegrateDefaultOptions } from "./integrate.types";
import type { ZuordIntegrateMode, ZuordIntegrateDefaultMode, ZuordIntegrateResolveOptions } from "./integrate.types";
import type { ZuordOmit } from "./omit.types";
import type { ZuordOmitRaw } from "./omit.types";
import type { ZuordOmitOf } from "./omit.types";
import type { ZuordPick } from "./pick.types";
import type { ZuordPickRaw } from "./pick.types";
import type { ZuordPickOf } from "./pick.types";
import type { ZuordImpose, ZuordImposeRaw } from "./impose.types";
import type { ZuordOverride } from "./override.types";
import { ZuordUtil } from "@/util/alias.types";

/**
 * 
 */
export namespace Zuord {

    // MODE

    /**
     * 
     */
    export type Mode = ZuordMode;

    /**
     * 
     */
    export type LiteMode = ZuordLiteMode;

    /**
     * 
     */
    export type DefaultMode = ZuordDefaultMode;


    // OPTIONS

    /**
     * 
     */
    export type Options<Mode extends Partial<Zuord.Mode> = Partial<Zuord.Mode>> = ZuordOptions<Mode>;

    /**
     * 
     */
    export type DefaultOptions = ZuordDefaultOptions;

    /**
     * 
     */
    export type ResolveOptions<T extends ZuordUtil.Optional<Zuord.Options>, R extends Zuord.Options = Zuord.DefaultOptions> = ZuordResolvedOptions<T, R>;

    /**
     * 
     */
    export type OptionsOf<T extends Zuord.Data> = ZuordOptionsOf<T>;


    // DATA

    /**
     * 
     */
    export type Data = ZuordData;

    /**
     * 
     */
    export type DataOf<U extends object[], C extends Zuord.OutcastConstructors, M extends Partial<Zuord.Mode>> = ZuordDataOf<U, C, M>;


    // OUTCAST

    /**
     * 
     */
    export type Outcast = ZuordOutcast;

    /**
     * 
     */
    export type Outcasts = ZuordOutcasts;

    /**
     * 
     */
    export type OutcastConstructor = ZuordOutcastConstructor;

    /**
     * 
     */
    export type OutcastConstructors = ZuordOutcastConstructors;

    /**
     * 
     */
    export type DefaultOutcasts = ZuordDefaultOutcasts;

    /**
     * 
     */
    export type ResolveOutcasts<T extends Zuord.Outcasts> = ZuordResolveOutcasts<T>;


    // NORMALIZE

    /**
     * 
     */
    export type Normalize<T, Options extends Zuord.Options = Zuord.DefaultOptions> = ZuordNormalize<T, Options>;

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
    export type NormalizeResolveOptions<T extends Partial<Zuord.NormalizeOptions>> = ZuordNormalizeResolveOptions<T>;


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
    export type Merge<U extends any, Options extends Zuord.MergeOptions = Zuord.MergeDefaultOptions> = ZuordMerge<U, Options>;

    /**
     * 
     */
    export type MergeRaw<U extends any, Options extends Zuord.MergeOptions = Zuord.MergeDefaultOptions> = ZuordMergeRaw<U, Options>;

    /**
     * 
     */
    export type MergeOptions<Mode extends MergeMode = MergeMode> = ZuordMergeOptions<Mode>;

    /**
     * 
     */
    export type MergeDefaultOptions = ZuordMergeDefaultOptions;

    /**
     * 
     */
    export type MergeResolveOptions<T extends ZuordUtil.Optional<Zuord.MergeOptions>, R extends Zuord.MergeOptions = Zuord.MergeDefaultOptions> = ZuordMergeResolveOptions<T, R>;

    /**
     * 
     */
    export type MergeMode = ZuordMergeMode;

    /**
     * 
     */
    export type MergeDefaultMode = ZuordMergeDefaultMode;
    

    // INTEGRATE

    /**
     * 
     */
    export type Integrate<A, B, Options extends IntegrateOptions = IntegrateDefaultOptions> = ZuordIntegrate<A, B, Options>;

    /**
     * 
     */
    export type IntegrateRaw<A, B, Options extends IntegrateOptions = IntegrateDefaultOptions> = ZuordIntegrateRaw<A, B, Options>;

    /**
     * 
     */
    export type IntegrateOptions<Mode extends IntegrateMode = IntegrateMode> = ZuordIntegrateOptions<Mode>;

    /**
     * 
     */
    export type IntegratePartialOptions = ZuordIntegratePartialOptions;

    /**
     * 
     */
    export type IntegrateDefaultOptions = ZuordIntegrateDefaultOptions;

    /**
     * 
     */
    export type IntegrateResolveOptions<T extends Partial<ZuordIntegrateOptions>, R extends ZuordIntegrateOptions = ZuordIntegrateDefaultOptions> = ZuordIntegrateResolveOptions<T, R>;

    /**
     * 
     */
    export type IntegrateMode = ZuordIntegrateMode;

    /**
     * 
     */
    export type IntegrateDefaultMode = ZuordIntegrateDefaultMode;

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


    // IMPOSE

    /**
     * 
     */
    export type Impose<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = ZuordImpose<TBase, TPatch, TCurrent>;

    /**
     * 
     */
    export type ImposeRaw<TBase, TPatch extends ZuordUtil.Optional<TBase>, TCurrent extends TBase = TBase> = ZuordImposeRaw<TBase, TPatch, TCurrent>;


    // OVERRIDE

    /**
     * 
     */
    export type Override<TBase, TContent extends ZuordUtil.Optional<TBase>> = ZuordOverride<TBase, TContent>;
}