import { InternalZuord } from "./index";
import { ZuordType } from "zuord/type";
import { ZuordUtil } from "@zuord/util";

export type Integrate<A, B, Options extends IntegrateOptions = IntegrateDefaultOptions> = InternalZuord.Normalize<IntegrateRaw<A, B, Options>>;

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

export type IntegrateOptions<Mode extends Partial<IntegrateMode> = Partial<IntegrateMode>> = InternalZuord.Options<Mode>;

export type IntegratePartialOptions = Partial<IntegrateOptions>;

export type IntegrateDefaultOptions = InternalZuord.ResolveOptions<{
    mode: IntegrateDefaultMode;
}, InternalZuord.DefaultOptions>;

export type IntegrateResolveOptions<T extends InternalZuord.Optional<IntegrateOptions>, R extends IntegrateOptions = IntegrateDefaultOptions> 
    = InternalZuord.ResolveOptions<T, R>;

export type IntegrateMode = InternalZuord.Mode & IntegrateConcantMode;

export type IntegrateDefaultMode = InternalZuord.DefaultMode & {
    concat: true;
};

export type IntegrateConcantMode = {
    concat: boolean;
};