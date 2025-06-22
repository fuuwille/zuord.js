import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Integrate<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = Zuord.Normalize<IntegrateType<A, B, Mode>>;

type IntegrateType<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = 
    A extends readonly (infer AX)[] ? (
        B extends readonly (infer BX)[] ? (
            ZuordUtil.IsExists<Mode, IntegrateNoConcantMode> extends true 
            ? Array<BX>
            : Array<BX | AX>
        ) : B
    ) :                 
    ZuordUtil.IsPlainObject<A> extends true ? (
        ZuordUtil.IsPlainObject<B> extends true ? (
            {
                [K in keyof A | keyof B]: IntegrateType<
                    K extends keyof A ? A[K] : never,
                    K extends keyof B ? B[K] : never,
                    Mode
                >
            }
        ) : B
    ) : B;

/*type IntegrateRaw<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = {
    [K in keyof A | keyof B]: K extends keyof B ? (
        K extends keyof A ? (
            A[K] extends readonly (infer AX)[] ? (
                B[K] extends readonly (infer BX)[] ? (
                    ZuordUtil.IsExists<Mode, IntegrateNoConcantMode> extends true 
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
};*/

type IntegrateMode = IntegrateNoConcantMode;

type IntegrateNoConcantMode= "no concat";

export type { Integrate as ZuordIntegrate };
export type { IntegrateMode as ZuordIntegrateMode };