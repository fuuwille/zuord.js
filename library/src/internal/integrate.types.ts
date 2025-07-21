import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";
import { internalZuord as internal } from ".";

export type Integrate<A, B, TMode extends IntegrateMode = typeof internal.integrateMode> = [ZuordTrait.IsAny<[A, B], never>] extends [false] ? (
    A extends infer ArrayA extends ZuordType.Array ? (
        B extends infer ArrayB extends ZuordType.Array ? (
            IntegrateArray<ArrayA, ArrayB, TMode>
        ) : never
    ) :
    A extends infer PlainA extends ZuordType.Plain ? (
        B extends infer PlainB extends ZuordType.Plain ? (
            IntegratePlain<PlainA, PlainB, TMode>
        ) : never
    ) : B
) : ZuordType.UnionOf<[A, B]>;

export type IntegrateArray<A extends ZuordType.Array, B extends ZuordType.Array, TMode extends IntegrateMode = typeof internal.integrateMode> = (
    [TMode["concat"]] extends [true] ? [...A, ...B] : B
)

export type IntegratePlain<A extends ZuordType.Plain, B extends ZuordType.Plain, TMode extends IntegrateMode = typeof internal.integrateMode> = ({
    [K in (keyof A | keyof B)]: (
        [TMode["shallow"]] extends [false] ? (
            Integrate<
                K extends keyof A ? A[K] : never,
                K extends keyof B ? B[K] : never,
                TMode
            >
        ) : K extends keyof A ? A[K] : K extends keyof B ? B[K] : never
    )
})

export type IntegrateMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode]>;