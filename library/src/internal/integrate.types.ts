import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";

export type Integrate<A, B, TMode extends IntegrateMode> = [ZuordTrait.IsAny<[A, B], never>] extends [false] ? (
    [ZuordTrait.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
        [TMode["concat"]] extends [true] 
            ? Array<ZuordType.ArrayInfer<B> | ZuordType.ArrayInfer<A>>
            : Array<ZuordType.ArrayInfer<B>>
    ) : 
    [ZuordTrait.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? ({
        [K in (keyof A | keyof B)]: (
            [TMode["shallow"]] extends [false] ? (
                Integrate<
                    K extends keyof A ? A[K] : never,
                    K extends keyof B ? B[K] : never,
                    TMode
                > 
            ) : K extends keyof A ? A[K] : K extends keyof B ? B[K] : never
        )
    }) : B
) : ZuordType.UnionOf<[A, B]>;

export type IntegrateArray<A extends ZuordType.Array, B extends ZuordType.Array, TMode extends IntegrateMode> = 
    [TMode["concat"]] extends [true] ? [...A, ...B] : B;

export type IntegratePlain<A extends ZuordType.Plain, B extends ZuordType.Plain, TMode extends IntegrateMode> = {
    [K in (keyof A | keyof B)]: (
        [TMode["shallow"]] extends [false] ? (
            Integrate<
                K extends keyof A ? A[K] : never,
                K extends keyof B ? B[K] : never,
                TMode
            >
        ) : K extends keyof A ? A[K] : K extends keyof B ? B[K] : never
    )
};

export type IntegrateMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode]>;