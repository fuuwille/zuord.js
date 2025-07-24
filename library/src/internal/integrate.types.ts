import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";
import { ZuordUtil } from "@zuord/util";

export type Integrate<A, B, TMode extends ZuordUtil.Partialize<IntegrateMode>> = (
    [ZuordTrait.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
        A extends ZuordType.Array ? B extends ZuordType.Array ? (
            IntegrateArray<A, B, TMode>
        ) : never : never
    ) : 
    [ZuordTrait.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? (
        A extends ZuordType.Plain ? B extends ZuordType.Plain ? (
            IntegratePlain<A, B, TMode>
        ) : never : never
    ) : B
);

export type IntegrateArray<A extends ZuordType.Array, B extends ZuordType.Array, TMode extends ZuordUtil.Partialize<IntegrateMode>> = (
    [TMode["concat"]] extends [true] ? [...A, ...B] : B
)

export type IntegratePlain<A extends ZuordType.Plain, B extends ZuordType.Plain, TMode extends ZuordUtil.Partialize<IntegrateMode>> = (
    (IntegratePlainOverlap<A, B, TMode> & IntegratePlainExtras<A, B, TMode>) extends infer TIntegrated ? ({
        [K in keyof TIntegrated]: TIntegrated[K];
    }) : never
)

export type IntegratePlainOverlap<A extends ZuordType.Plain, B extends ZuordType.Plain, TMode extends ZuordUtil.Partialize<IntegrateMode>> = ({
    [K in keyof A]: K extends keyof B ? (
        [TMode["shallow"]] extends [true] ? B[K] : Integrate<A[K], B[K], TMode>
    ) : A[K];
});

export type IntegratePlainExtras<A extends ZuordType.Plain, B extends ZuordType.Plain, _TMode extends ZuordUtil.Partialize<IntegrateMode>> = ({
    [K in keyof B as K extends keyof A ? never : K]: B[K];
});

export type IntegrateMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode]>;