import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";

export type Integrate<A, B, Options extends IntegrateBaseMode = IntegrateDefaultMode> = [ZuordTrait.IsAny<[A, B], never>] extends [false] ? (
    [ZuordTrait.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
        [Options["concat"]] extends [true] 
            ? Array<ZuordType.ArrayInfer<B> | ZuordType.ArrayInfer<A>>
            : Array<ZuordType.ArrayInfer<B>>
    ) : 
    [ZuordTrait.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? ({
        [K in (keyof A | keyof B)]: (
            [Options["shallow"]] extends [false] ? (
                Integrate<
                    K extends keyof A ? A[K] : never,
                    K extends keyof B ? B[K] : never,
                    Options
                > 
            ) : K extends keyof A ? A[K] : K extends keyof B ? B[K] : never
        )
    }) : B
) : ZuordType.UnionOf<[A, B]>;

export type IntegrateConcatMode = { concat: boolean };

export type IntegrateBaseMode = ZuordCore.ModeOf<[ZuordCore.BaseMode, IntegrateConcatMode]>;

export type IntegrateDefaultMode = ZuordCore.ModeFrom<IntegrateBaseMode, {
    concat: true;
}, ZuordCore.DefaultMode>;