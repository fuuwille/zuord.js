import { Zuord } from "@/core/alias.types";
import { ZuordUtil } from "@/util/alias.types";

type Integrate<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = Zuord.Normalize<IntegrateRaw<A, B, Mode>>;

type IntegrateRaw<A, B, Mode extends ZuordUtil.Mode<IntegrateMode> = ""> = [ZuordUtil.IsSomeNever<[A, B]>] extends [false] ? (
    [ZuordUtil.IsAllArray<[A, B]>] extends [true] ? (
        ZuordUtil.IsExists<Mode, IntegrateConcantMode> extends true 
            ? Array<ZuordUtil.ArrayIn<A> | ZuordUtil.ArrayIn<B>>
            : Array<ZuordUtil.ArrayIn<A>>
    ) : 
    [ZuordUtil.IsAllPlain<[A, B]>] extends [true] ? ({
        [K in (keyof A | keyof B)]: (
            ZuordUtil.IsExists<Mode, IntegrateShallowMode> extends false ? (
                IntegrateRaw<
                    K extends keyof A ? A[K] : never,
                    K extends keyof B ? B[K] : never,
                    Mode
                > 
            ) : K extends keyof A ? A[K] : K extends keyof B ? B[K] : never
        )
    }) : B
) : ZuordUtil.AsNonNever<[A, B]>;

type IntegrateMode = IntegrateConcantMode | IntegrateShallowMode;

type IntegrateConcantMode= "concat";

type IntegrateShallowMode = "shallow";

export type { Integrate as ZuordIntegrate };
export type { IntegrateMode as ZuordIntegrateMode };