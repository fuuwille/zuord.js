import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";
import { ZuordUtil } from "@zuord/util";

export type Integrate<A, B, TMode extends ZuordUtil.Partialize<IntegrateMode>> = (
    [ZuordTrait.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
        IntegrateArray<A, B, TMode>
    ) : 
    [ZuordTrait.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? (
        IntegratePlain<A, B, TMode>
    ) : B
);

export type IntegrateArray<A, B, TMode extends ZuordUtil.Partialize<IntegrateMode>> = (
    A extends ZuordType.Array ? B extends ZuordType.Array ? (
        [TMode["concat"]] extends [true] ? [...A, ...B] : B
    ) : never : never
)

export type IntegratePlain<A, B, TMode extends ZuordUtil.Partialize<IntegrateMode>> = (
    A extends ZuordType.Plain ? B extends ZuordType.Plain ? (
        (IntegratePlainOverlap<A, B, TMode> & IntegratePlainExtras<A, B>) extends infer TIntegrated ? ({
            [K in keyof TIntegrated]: TIntegrated[K];
        }) : never
    ) : never : never
)

export type IntegratePlainOverlap<A, B, TMode extends ZuordUtil.Partialize<IntegrateMode>> = ({
    [K in keyof A]: K extends keyof B ? (
        [TMode["shallow"]] extends [true] ? B[K] : Integrate<A[K], B[K], TMode>
    ) : A[K];
});

export type IntegratePlainExtras<A, B> = ({
    [K in Exclude<keyof B, keyof A>]: B[K];
});

export type IntegrateMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode]>;