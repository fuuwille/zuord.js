import { ZuordType as Type } from "@zuord/type";
import { ZuordUtil as Util, ZuordUtil } from "@zuord/util";

export declare namespace Integrate {
    export type Unknown<TBase, TOverlay, TMode> = (
        [TBase, TOverlay] extends [infer A extends Type.Plain, infer B extends Type.Plain] ? ResolvePlain<A, B, TMode> :
        [TBase, TOverlay] extends [infer A extends Type.Array, infer B extends Type.Array] ? ResolveArray<A, B, TMode> : TOverlay
    );

    export type ResolvePlain<TBase extends Type.Plain, TOverlay extends Type.Plain, TMode> = (
        (ResolvePlainOverrides<TBase, TOverlay, TMode> & ResolvePlainExtras<TBase, TOverlay>) extends infer TIntegrated ? ({
            -readonly [K in keyof TIntegrated]: TIntegrated[K];
        }) : never
    )

    export type ResolvePlainOverrides<TBase extends Type.Plain, TOverlay extends Type.Plain, TMode> = ({
        [K in keyof TBase]: K extends keyof TOverlay ? (
            TMode extends { shallow: true } ? TOverlay[K] : Unknown<TBase[K], TOverlay[K], TMode>
        ) : TBase[K];
    });

    export type ResolvePlainExtras<TBase extends Type.Plain, TOverlay extends Type.Plain> = ({
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