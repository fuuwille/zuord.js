import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export declare namespace Integrate {
    export type Object<A, B, TMode> = (
        [A, B] extends [infer A extends Type.Array, infer B extends Type.Array] ? (
            Array<A, B, TMode>
        ) : 
        [A, B] extends [infer A extends Type.Plain, infer B extends Type.Plain] ? (
            Plain<A, B, TMode>
        ) : B
    );

    export type Array<A extends Type.Array, B extends Type.Array, TMode> = (
        ArrayOverlap<A, B, TMode> extends infer TIntegrated extends Type.Array ? (
            Util.Mutable<TIntegrated[number][]>
        ) : never
    );

    export type ArrayOverlap<A extends Type.Array, B extends Type.Array, TMode> = (
        A extends Type.Array ? B extends Type.Array ? (
            TMode extends { concat: true } ? (
                [...A, ...B]
            ) : B
        ) : never : never
    );

    export type Plain<A extends Type.Plain, B extends Type.Plain, TMode> = (
        (PlainOverlap<A, B, TMode> & PlainExtras<A, B>) extends infer TIntegrated ? ({
            -readonly [K in keyof TIntegrated]: TIntegrated[K];
        }) : never
    )

    export type PlainOverlap<A extends Type.Plain, B extends Type.Plain, TMode> = ({
        [K in keyof A]: K extends keyof B ? (
            TMode extends { shallow: true } ? B[K] : Object<A[K], B[K], TMode>
        ) : A[K];
    });

    export type PlainExtras<A extends Type.Plain, B extends Type.Plain> = ({
        [K in keyof B as K extends keyof A ? never : K]: B[K];
    });
}