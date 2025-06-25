import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Integrate<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = Zuord.Normalize<IntegrateRaw<A, B, Mode>>;

type IntegrateRaw<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = ZuordUtil.SomeIsNever<[A, B]> extends false ? (
    A extends readonly (infer AX)[] ? (
        B extends readonly (infer BX)[] ? (
            ZuordUtil.IsExists<Mode, IntegrateNoConcantMode> extends true 
            ? Array<BX>
            : Array<BX | AX>
        ) : B
    ) :                 
    ZuordUtil.IsPlain<A> extends true ? (
        ZuordUtil.IsPlain<B> extends true ? (
            {
                [K in keyof A | keyof B]: IntegrateRaw<
                    K extends keyof A ? A[K] : never,
                    K extends keyof B ? B[K] : never,
                    Mode
                >
            }
        ) : B
    ) : B
) : ZuordUtil.AsSomeNonNever<[A, B]>;

type IntegrateMode = IntegrateNoConcantMode;

type IntegrateNoConcantMode= "no concat";

export type { Integrate as ZuordIntegrate };
export type { IntegrateMode as ZuordIntegrateMode };