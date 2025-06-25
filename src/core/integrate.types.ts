import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Integrate<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = Zuord.Normalize<IntegrateRaw<A, B, Mode>>;

type IntegrateRaw<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = ZuordUtil.SomeIsNever<[A, B]> extends false ? (
    ZuordUtil.IsAllArray<[A, B]> extends true ? (
            ZuordUtil.IsExists<Mode, IntegrateNoConcantMode> extends true 
            ? Array<ZuordUtil.ArrayIn<B>>
            : Array<ZuordUtil.ArrayIn<B> | ZuordUtil.ArrayIn<A>>
    ) : 
    ZuordUtil.IsAllPlain<[A, B]> extends false ? B : ( 
        {
            [K in keyof A | keyof B]: IntegrateRaw<
                K extends keyof A ? A[K] : never,
                K extends keyof B ? B[K] : never,
                Mode
            >
        }
    )
) : ZuordUtil.SomeAsNonNever<[A, B]>;

type IntegrateMode = IntegrateNoConcantMode;

type IntegrateNoConcantMode= "no concat";

export type { Integrate as ZuordIntegrate };
export type { IntegrateMode as ZuordIntegrateMode };

type Result = Zuord.Normalize<ZuordUtil.AsOnePlain<{ a?: string} | {a: string, b: number}>>;