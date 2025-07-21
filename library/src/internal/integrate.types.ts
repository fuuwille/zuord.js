import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";
import { internalZuord as internal } from ".";

export type Integrate<A, B, TMode extends IntegrateMode = typeof internal.integrateMode> = [ZuordTrait.IsAny<[A, B], never>] extends [false] ? (
    [ZuordTrait.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
        IntegrateArray<A, B, TMode>
    ) : 
    [ZuordTrait.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? (
        IntegratePlain<A, B, TMode>
    ) : B
) : ZuordType.UnionOf<[A, B]>;

export type IntegrateArray<A, B, TMode extends IntegrateMode = typeof internal.integrateMode> = (
    A extends infer ArrayA extends ZuordType.Array ? (
        B extends infer ArrayB extends ZuordType.Array ? (
            [TMode["concat"]] extends [true] ? [...ArrayA, ...ArrayB] : ArrayB
        ) : never
    ) : never
)

export type IntegratePlain<A, B, TMode extends IntegrateMode = typeof internal.integrateMode> = (
    A extends infer PlainA extends ZuordType.Plain ? (
        B extends infer PlainB extends ZuordType.Plain ? ({
            [K in (keyof PlainA | keyof PlainB)]: (
                [TMode["shallow"]] extends [false] ? (
                    Integrate<
                        K extends keyof PlainA ? PlainA[K] : never,
                        K extends keyof PlainB ? PlainB[K] : never,
                        TMode
                    >
                ) : K extends keyof PlainA ? PlainA[K] : K extends keyof PlainB ? PlainB[K] : never
            )
        }) : never
    ) : never
)

export type IntegrateMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode]>;