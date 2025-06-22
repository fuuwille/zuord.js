import { ZuordUtil } from "@";

type Integrate<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = {
    [K in keyof A | keyof B]: K extends keyof B ? (
        K extends keyof A ? (
            ZuordUtil.HasAllArray<[A[K], B[K]]> extends true ? (
                IntegrateArray<A[K], B[K], Mode>
            ) : (
                ZuordUtil.IsPlain<A[K]> extends true ? (
                    ZuordUtil.IsPlain<B[K]> extends true ? (
                        Integrate<A[K], B[K], Mode>
                    ) : B[K]
                ) : B[K]
            )
        ) : B[K]
    ) : (
        K extends keyof A ? (
            A[K]
        ) : never
    )
};

type IntegrateArray<A, B, Mode extends ZuordUtil.Mode<IntegrateMode>  = ""> = A extends readonly (infer U)[] ? (
    B extends readonly (infer V)[] ? (
        ZuordUtil.IsExists<Mode, "concat"> extends true ? (
            Array<U | V>
        ) : Array<V>
    ) : never
) : never;

type IntegrateMode = IntegrateConcatMode;

type IntegrateConcatMode = "concat";

export type { Integrate as ZuordIntegrate };
export type { IntegrateArray as ZuordIntegrateArray };
export type { IntegrateMode as ZuordIntegrateMode };