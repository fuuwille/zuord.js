import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util } from "@zuord/util";

export declare namespace Integrate {
    export type Unknown<A, B, TMode> = (
        [A, B] extends [infer A extends Type.Plain, infer B extends Type.Plain] ? ResolvePlain<A, B, TMode> :
        [A, B] extends [infer A extends Type.Array, infer B extends Type.Array] ? Array<A, B, TMode> : B
    );

    export type ResolvePlain<A extends Type.Plain, B extends Type.Plain, TMode> = (
        (ResolvePlainOverlap<A, B, TMode> & ResolvePlainExtras<A, B>) extends infer TIntegrated ? ({
            -readonly [K in keyof TIntegrated]: TIntegrated[K];
        }) : never
    )

    export type ResolvePlainOverlap<A extends Type.Plain, B extends Type.Plain, TMode> = ({
        [K in keyof A]: K extends keyof B ? (
            TMode extends { shallow: true } ? B[K] : Unknown<A[K], B[K], TMode>
        ) : A[K];
    });

    export type ResolvePlainExtras<A extends Type.Plain, B extends Type.Plain> = ({
        [K in keyof B as K extends keyof A ? never : K]: B[K];
    });

    export type Array<A extends Type.Array, B extends Type.Array, TMode> = (
        ArrayOverlap<A, B, TMode> extends infer TIntegrated extends Type.Array ? (
            Util.Mutable.Hybrid<TIntegrated[number][]>
        ) : never
    );

    export type ArrayOverlap<A extends Type.Array, B extends Type.Array, TMode> = (
        A extends Type.Array ? B extends Type.Array ? (
            TMode extends { concat: true } ? (
                [...A, ...B]
            ) : B
        ) : never : never
    );
}