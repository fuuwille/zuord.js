import { ZuordCore } from "@zuord/core";
import { ZuordType } from "@zuord/type";
import { ZuordUtil } from "@zuord/util";

export namespace Integrate {
    export type Object<A, B, TMode> = (
        [A, B] extends [infer A extends ZuordType.Array, infer B extends ZuordType.Array] ? (
            Array<A, B, TMode>
        ) : 
        [A, B] extends [infer A extends ZuordType.Plain, infer B extends ZuordType.Plain] ? (
            Plain<A, B, TMode>
        ) : B
    );

    export type Array<A extends ZuordType.Array, B extends ZuordType.Array, TMode> = (
        ArrayCollection<A, B, TMode> extends infer TIntegrated extends ZuordType.Array ? (
            ZuordUtil.Mutable<TIntegrated[number][]>
        ) : never
    );

    export type ArrayCollection<A extends ZuordType.Array, B extends ZuordType.Array, TMode> = (
        A extends ZuordType.Array ? B extends ZuordType.Array ? (
            TMode extends { concat: true } ? (
                [...A, ...B]
            ) : B
        ) : never : never
    );

    export type Plain<A extends ZuordType.Plain, B extends ZuordType.Plain, TMode> = (
        (PlainOverlap<A, B, TMode> & PlainExtras<A, B>) extends infer TIntegrated ? ({
            -readonly [K in keyof TIntegrated]: TIntegrated[K];
        }) : never
    )

    export type PlainOverlap<A extends ZuordType.Plain, B extends ZuordType.Plain, TMode> = ({
        [K in keyof A]: K extends keyof B ? (
            [ZuordCore.ModeOn<TMode, "shallow">] extends [true] ? B[K] : Object<A[K], B[K], TMode>
        ) : A[K];
    });

    export type PlainExtras<A extends ZuordType.Plain, B extends ZuordType.Plain> = ({
        [K in keyof B as K extends keyof A ? never : K]: B[K];
    });
}