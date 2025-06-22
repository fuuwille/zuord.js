import { ZuordUtil } from "@";

type Integrate<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = {
    [K in keyof A | keyof B]: K extends keyof B ? (
        K extends keyof A ? (
            A[K] extends readonly (infer AX)[] ? (
                B[K] extends readonly (infer BX)[] ? (
                    ZuordUtil.IsExists<Mode, "suppressArray"> extends true 
                    ? Array<BX>
                    : Array<BX | AX>
                ) : B[K]
            ) :                 
            ZuordUtil.IsPlainObject<A[K]> extends true ? (
                ZuordUtil.IsPlainObject<B[K]> extends true ? (
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

type IntegrateMode = IntegrateSuppressArrayMode;

type IntegrateSuppressArrayMode= "suppressArray";

export type { Integrate as ZuordIntegrate };
export type { IntegrateMode as ZuordIntegrateMode };