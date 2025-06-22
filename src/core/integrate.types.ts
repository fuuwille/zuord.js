import { ZuordUtil } from "@";

type Integrate<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = {
    [K in keyof A | keyof B]: K extends keyof B ? (
        K extends keyof A ? (
            A[K] extends readonly unknown[] ? (
                B[K] extends readonly unknown[] ? (
                    IntegrateArray<A[K], B[K], Mode>
                ) : B[K]
            ) :                 
            ZuordUtil.IsPlain<A[K]> extends true ? (
                ZuordUtil.IsPlain<B[K]> extends true ? (
                    Integrate<A[K], B[K], Mode>
                ) : B[K]
            ) : B[K]
        ) : B[K]
    ) : (
        K extends keyof A ? (
            A[K]
        ) : never
    )
};

type IntegrateArray<A, B, Mode extends ZuordUtil.Mode<IntegrateMode>  = ""> = (
    A extends readonly (infer U)[] ? (
        B extends readonly (infer V)[] ? (
            ZuordUtil.IsExists<Mode, "no-concat"> extends true ? (
                Array<V>
            ) : Array<U | V>
        ) : never
    ) : never
);

type IntegrateMode = IntegrateNoConcatMode;

type IntegrateNoConcatMode = "no-concat";

export type { Integrate as ZuordIntegrate };
export type { IntegrateArray as ZuordIntegrateArray };
export type { IntegrateMode as ZuordIntegrateMode };