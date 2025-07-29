import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordTrait } from "@zuord/trait";
import { ZuordUtil } from "@zuord/util";

export namespace Integrate {
    export type Object<A, B, TMode> = (
        [ZuordTrait.IsEvery<[A, B], ZuordType.Array>] extends [true] ? (
            Array<A, B, TMode>
        ) : 
        [ZuordTrait.IsEvery<[A, B], ZuordType.Plain>] extends [true] ? (
            Plain<A, B, TMode>
        ) : B
    );

    export type Array<A, B, TMode> = (
        Collection<A, B, TMode> extends infer TIntegrated extends ZuordType.Array ? (
            ZuordUtil.Mutable<TIntegrated[number][]>
        ) : never
    );

    export type Collection<A, B, TMode> = (
        A extends ZuordType.Array ? B extends ZuordType.Array ? (
            TMode extends { concat: true } ? (
                [...A, ...B]
            ) : B
        ) : never : never
    );

    export type Plain<A, B, TMode> = (
        (Overlap<A, B, TMode> & Extras<A, B>) extends infer TIntegrated ? ({
            -readonly [K in keyof TIntegrated]: TIntegrated[K];
        }) : never
    )

    export type Overlap<A, B, TMode> = ({
        [K in keyof A]: K extends keyof B ? (
            [ZuordCore.ModeOn<TMode, "shallow">] extends [true] ? B[K] : Object<A[K], B[K], TMode>
        ) : A[K];
    });

    export type Extras<A, B> = ({
        [K in keyof B as K extends keyof A ? never : K]: B[K];
    });
}