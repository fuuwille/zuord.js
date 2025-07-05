import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/trait/_alias.types";

type Integrate<A, B, Options extends IntegrateOptions = IntegrateDefaultOptions> = Zuord.Normalize<IntegrateRaw<A, B, Options>>;

type IntegrateRaw<A, B, Options extends IntegrateOptions = IntegrateDefaultOptions> = [ZuordUtil.IsSomeNever<[A, B]>] extends [false] ? (
    [ZuordUtil.IsAllArray<[A, B]>] extends [true] ? (
        [Options["mode"]["concat"]] extends [true] 
            ? Array<ZuordUtil.ArrayIn<A> | ZuordUtil.ArrayIn<B>>
            : Array<ZuordUtil.ArrayIn<A>>
    ) : 
    [ZuordUtil.IsAllPlain<[A, B]>] extends [true] ? ({
        [K in (keyof A | keyof B)]: (
            [Options["mode"]["shallow"]] extends [false] ? (
                IntegrateRaw<
                    K extends keyof A ? A[K] : never,
                    K extends keyof B ? B[K] : never,
                    Options
                > 
            ) : K extends keyof A ? A[K] : K extends keyof B ? B[K] : never
        )
    }) : B
) : ZuordUtil.AsNonNever<[A, B]>;

type IntegrateOptions<Mode extends Partial<IntegrateMode> = Partial<IntegrateMode>> = Zuord.Options<Mode>;

type IntegratePartialOptions = Partial<IntegrateOptions>;

type IntegrateDefaultOptions = Zuord.ResolveOptions<{
    mode: IntegrateDefaultMode;
}, Zuord.DefaultOptions>;

type IntegrateResolveOptions<T extends ZuordUtil.Optional<IntegrateOptions>, R extends IntegrateOptions = IntegrateDefaultOptions> 
    = Zuord.ResolveOptions<T, R>;

type IntegrateMode = Zuord.Mode & IntegrateConcantMode;

type IntegrateDefaultMode = Zuord.DefaultMode & {
    concat: true;
};

type IntegrateConcantMode = {
    concat: boolean;
};

export type { Integrate as ZuordIntegrate };
export type { IntegrateRaw as ZuordIntegrateRaw };
export type { IntegrateOptions as ZuordIntegrateOptions };
export type { IntegratePartialOptions as ZuordIntegratePartialOptions };
export type { IntegrateDefaultOptions as ZuordIntegrateDefaultOptions };
export type { IntegrateResolveOptions as ZuordIntegrateResolveOptions };
export type { IntegrateMode as ZuordIntegrateMode };
export type { IntegrateDefaultMode as ZuordIntegrateDefaultMode };