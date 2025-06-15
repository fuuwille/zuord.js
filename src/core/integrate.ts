import { ZuordUtil } from "@";

//

type Integrate<A, B, Mode extends IntegrateModeType = ""> = {
    [K in keyof A | keyof B]: K extends keyof B ? (
        K extends keyof A ? (
            ZuordUtil.IsArray<A[K]> extends true ? (
                ZuordUtil.IsArray<B[K]> extends true ? (
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

type IntegrateArray<A, B, Mode extends IntegrateModeType = ""> = A extends readonly (infer U)[] ? (
    B extends readonly (infer V)[] ? (
        ZuordUtil.IsExists<Mode, "concat"> extends true ? (
            Array<U | V>
        ) : Array<V>
    ) : never
) : never;

type IntegrateModeType = "" | "concat";

//

const integrateMode = {
    concat: "concat",
}

//

export type { Integrate as ZuordIntegrate };
export type { IntegrateArray as ZuordIntegrateArray };
export type { IntegrateModeType as ZuordIntegrateModeType };
export { integrateMode as zuordIntegrateMode };