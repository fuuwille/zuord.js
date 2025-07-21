import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";
import { internalZuord as internal } from ".";

export type Integrate<A, B, TMode extends IntegrateMode = typeof internal.integrateMode> = [ZuordTrait.IsAny<[A, B], never>] extends [false] ? (
    [ZuordTrait.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
        IntegrateArray<A & ZuordType.Array, B & ZuordType.Array, TMode>
    ) : 
    [ZuordTrait.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? (
        IntegratePlain<A & ZuordType.Plain, B & ZuordType.Plain, TMode>
    ) : B
) : ZuordType.UnionOf<[A, B]>;

export type IntegrateArray<A extends ZuordType.Array, B extends ZuordType.Array, TMode extends IntegrateMode = typeof internal.integrateMode> = 
    [TMode["concat"]] extends [true] ? [...A, ...B] : B;

export type IntegratePlain<A extends ZuordType.Plain, B extends ZuordType.Plain, TMode extends IntegrateMode = typeof internal.integrateMode> = {
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