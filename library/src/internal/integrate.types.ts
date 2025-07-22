import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";
import { ZuordUtil } from "@zuord/util";

export type Integrate<A, B, TMode extends ZuordUtil.Partialize<IntegrateMode>> = (
    [ZuordTrait.IsAny<[A, B], never>] extends [false] ? (
        [ZuordTrait.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
            IntegrateArray<A, B, TMode>
        ) : 
        [ZuordTrait.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? (
            IntegratePlain<A, B, TMode>
        ) : B
    ) : ZuordType.UnionOf<[A, B]>
);

export type IntegrateArray<A, B, TMode extends ZuordUtil.Partialize<IntegrateMode>> = (
    A extends ZuordType.Array ? (
        B extends ZuordType.Array ? (
            [TMode["concat"]] extends [true] ? [...A, ...B] : B
        ) : never
    ) : never
)

export type IntegratePlain<A, B, TMode extends ZuordUtil.Partialize<IntegrateMode>> = (
    A extends ZuordType.Plain ? (
        B extends ZuordType.Plain ? ({
            [K in (keyof A | keyof B)]: (
                [TMode["shallow"]] extends [true] ? (
                    K extends keyof A ? A[K] : K extends keyof B ? B[K] : never
                ) : 
                Integrate<
                    K extends keyof A ? A[K] : never,
                    K extends keyof B ? B[K] : never,
                    TMode
                >
            )
        }) : never
    ) : never
)

export type IntegrateMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode]>;