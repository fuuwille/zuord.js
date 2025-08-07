import { ZuordType as Type } from "@zuord/type";

export declare namespace Integrate {
    export type Any<TBase, TOverlay, TMode> = (
        [TBase, TOverlay] extends [infer A extends Type.Plain, infer B extends Type.Plain] ? Integrate.Plain<A, B, TMode> :
        [TBase, TOverlay] extends [infer A extends Type.Array, infer B extends Type.Array] ? ResolveArray<A, B, TMode> : TOverlay
    );

    export type Plain<TBase extends Type.Plain, TOverlay extends Type.Plain, TMode> = (
        (PlainOverrides<TBase, TOverlay, TMode> & PlainExtras<TBase, TOverlay>) extends infer TIntegrated ? ({
            -readonly [K in keyof TIntegrated]: TIntegrated[K];
        }) : never
    )

    export type PlainOverrides<TBase extends Type.Plain, TOverlay extends Type.Plain, TMode> = ({
        [K in keyof TBase]: K extends keyof TOverlay ? (
            TMode extends { shallow: true } ? (
                TOverlay[K]
            ) : Any<TBase[K], TOverlay[K], TMode>
        ) : TBase[K];
    });

    export type PlainExtras<TBase extends Type.Plain, TOverlay extends Type.Plain> = ({
        [K in keyof TOverlay as K extends keyof TBase ? never : K]: TOverlay[K];
    });

    export type ResolveArray<TBase extends Type.Array, TOverlay extends Type.Array, TMode> = (
        ResolveArrayOverlap<TBase, TOverlay, TMode> extends infer TIntegrated extends Type.Array ? (
            TIntegrated[number][]
        ) : never
    );

    export type ResolveArrayOverlap<TBase extends Type.Array, TOverlay extends Type.Array, TMode> = (
        TBase extends Type.Array ? TOverlay extends Type.Array ? (
            TMode extends { concat: true } ? (
                [...TBase, ...TOverlay]
            ) : TOverlay
        ) : never : never
    );
}