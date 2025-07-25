import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";
import { ZuordUtil } from "@zuord/util";

export type Integrate<A, B, TMode> = (
    [ZuordTrait.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
        IntegrateArray<A, B, TMode>
    ) : 
    [ZuordTrait.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? (
        IntegratePlain<A, B, TMode>
    ) : B
);
export type IntegrateArray<A, B, TMode> = (
    A extends ZuordType.Array ? B extends ZuordType.Array ? (
        TMode extends { concat: true } ? (
            [...A, ...B]
        ) : B
    ) : never : never
) extends infer TIntegrated extends ZuordType.Array ? ZuordUtil.Mutable<TIntegrated[number][]> : never;

export type IntegratePlain<A, B, TMode> = (
    (IntegrateOverlap<A, B, TMode> & IntegrateExtras<A, B>) extends infer TIntegrated ? ({
        [K in keyof TIntegrated]: TIntegrated[K];
    }) : never
)

export type IntegrateOverlap<A, B, TMode> = ({
    [K in keyof A]: K extends keyof B ? (
        [ZuordCore.ModeOn<TMode, "shallow">] extends [true] ? B[K] : Integrate<A[K], B[K], TMode>
    ) : A[K];
});

export type IntegrateExtras<A, B> = ({
    [K in keyof B as K extends keyof A ? never : K]: B[K];
});

export type IntegrateMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode, ZuordCore.UniqueMode]>;

/**
 * @puretype
 */
export type IntegrateShape = ZuordType.Array | ZuordType.Plain;