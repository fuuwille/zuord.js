import { ZuordUtil } from "@";

type Integrate<A, B, Mode extends IntegrateMode | "" = ""> = {
    [K in keyof A | keyof B]: K extends keyof B ? (
        K extends keyof A ? (
            ZuordUtil.HasArray<A[K]> extends true ? (
                ZuordUtil.HasArray<B[K]> extends true ? (
                    IntegrateArray<A[K], B[K], Mode>
                ) : B[K]
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

type IntegrateArray<A, B, Mode extends IntegrateMode | "" = ""> = A extends readonly (infer U)[] ? (
    B extends readonly (infer V)[] ? (
        ZuordUtil.IsExists<Mode, "concat"> extends true ? (
            Array<U | V>
        ) : Array<V>
    ) : never
) : never;

type IntegrateMode = "concat";

export type { Integrate as ZuordIntegrate };
export type { IntegrateArray as ZuordIntegrateArray };
export type { IntegrateMode as ZuordIntegrateMode };