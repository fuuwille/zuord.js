import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";

export type Integrate<A, B, TMode extends Partial<IntegrateMode>> = (
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

export type IntegrateArray<A, B, TMode extends Partial<IntegrateMode>> = (
    A extends ZuordType.Array ? B extends ZuordType.Array ? (
        [ZuordCore.ModeOn<TMode, "shallow">] extends [true] ? [...A, ...B] : B
    ) : never : never
)

export type IntegratePlain<A, B, TMode extends Partial<IntegrateMode>> = (
    (IntegrateOverlap<A, B, TMode> & IntegrateExtras<A, B, TMode>) extends infer TIntegrated ? ({
        [K in keyof TIntegrated]: TIntegrated[K];
    }) : never
)

export type IntegrateOverlap<A, B, TMode extends Partial<IntegrateMode>> = ({
    [K in keyof A]: K extends keyof B ? (
        [ZuordCore.ModeOn<TMode, "shallow">] extends [true] ? B[K] : Integrate<A[K], B[K], TMode>
    ) : A[K];
});

export type IntegrateExtras<A, B, _TMode extends Partial<IntegrateMode>> = ({
    [K in keyof B as K extends keyof A ? never : K]: B[K];
});

export type IntegrateMode = ZuordCore.ModeResolve<[ZuordCore.BaseMode, ZuordCore.ConcatMode]>;

/**
 * @puretype
 */
export type IntegrateShape = ZuordType.Array | ZuordType.Plain;