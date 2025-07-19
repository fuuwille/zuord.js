import { Zuord } from "./index";
import { ZuordType } from "@zuord/type";
import { ZuordUtil } from "@zuord/util";

export type Integrate<A, B, Options extends IntegrateOptions = IntegrateDefaultOptions> = Zuord.Normalize<IntegrateRaw<A, B, Options>>;

export type IntegrateRaw<A, B, Options extends IntegrateOptions = IntegrateDefaultOptions> = [ZuordUtil.IsAny<[A, B], never>] extends [false] ? (
    [ZuordUtil.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
        [Options["mode"]["concat"]] extends [true] 
            ? Array<ZuordType.ArrayInfer<B> | ZuordType.ArrayInfer<A>>
            : Array<ZuordType.ArrayInfer<B>>
    ) : 
    [ZuordUtil.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? ({
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
) : ZuordType.UnionOf<[A, B]>;

export type IntegrateOptions<Mode extends Partial<IntegrateMode> = Partial<IntegrateMode>> = Zuord.Options<Mode>;

export type IntegratePartialOptions = Partial<IntegrateOptions>;

export type IntegrateDefaultOptions = Zuord.ResolveOptions<{
    mode: IntegrateDefaultMode;
}, Zuord.DefaultOptions>;

export type IntegrateResolveOptions<T extends Zuord.Optional<IntegrateOptions>, R extends IntegrateOptions = IntegrateDefaultOptions> 
    = Zuord.ResolveOptions<T, R>;

export type IntegrateMode = Zuord.Mode & IntegrateConcantMode;

export type IntegrateDefaultMode = Zuord.DefaultMode & {
    concat: true;
};

export type IntegrateConcantMode = {
    concat: boolean;
};