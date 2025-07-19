import { InternalZuord } from "./index";
import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordUtil } from "@zuord/util";
import { ZuordTrait } from "@zuord/trait";

export type Integrate<A, B, Options extends IntegrateOptions = IntegrateDefaultOptions> = InternalZuord.Normalize<IntegrateRaw<A, B, Options>>;

export type IntegrateRaw<A, B, Options extends IntegrateOptions = IntegrateDefaultOptions> = [ZuordTrait.IsAny<[A, B], never>] extends [false] ? (
    [ZuordTrait.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
        [Options["mode"]["concat"]] extends [true] 
            ? Array<ZuordType.ArrayInfer<B> | ZuordType.ArrayInfer<A>>
            : Array<ZuordType.ArrayInfer<B>>
    ) : 
    [ZuordTrait.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? ({
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

export type IntegrateResolveOptions<T extends ZuordUtil.Partialize<IntegrateOptions>, R extends IntegrateOptions = IntegrateDefaultOptions> 
    = InternalZuord.ResolveOptions<T, R>;

export type IntegrateMode = ZuordCore.BaseMode & IntegrateConcantMode;

export type IntegrateDefaultMode = ZuordCore.DefaultMode & {
    concat: true;
};

export type IntegrateConcantMode = {
    concat: boolean;
};