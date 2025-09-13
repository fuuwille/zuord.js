import type { ZuordType, ZuordTuple } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";
import type { ZuordUtil as Util } from "@zuord/util";

export type ResolveAny<TBase, TOverlay, TMode> = (
    [TBase, TOverlay] extends [infer A extends ZuordType.Plain, infer B extends ZuordType.Plain] ? ResolvePlain<A, B, TMode> :
    [TBase, TOverlay] extends [infer A extends ZuordType.Array, infer B extends ZuordType.Array] ? ResolveArray<A, B, TMode> : TOverlay
);

export type Plain<TBase, TOverlay, TMode> = (
    [TMode] extends [infer TMode extends Core.ModeRecord] ? (
        ResolvePlain<TBase, TOverlay, TMode> extends infer TPlain extends ZuordType.Plain ? (
            Util.Unify.Plain<TPlain, Core.ModeResolve<[TMode, { unifyArray: true }]>>
        ) : never
    ) : never
);

export type ResolvePlain<TBase, TOverlay, TMode> = (
    (ResolvePlainOverrides<TBase, TOverlay, TMode> & ResolvePlainExtras<TBase, TOverlay>) extends infer TIntegrated ? ({
        -readonly [K in keyof TIntegrated]: TIntegrated[K];
    }) : never
);

export type ResolvePlainOverrides<TBase, TOverlay, TMode> = ({
    [K in keyof TBase]: K extends keyof TOverlay ? (
        TMode extends { shallow: true } ? (
            TOverlay[K]
        ) : ResolveAny<TBase[K], TOverlay[K], TMode>
    ) : TBase[K];
});

export type ResolvePlainExtras<TBase, TOverlay> = ({
    [K in keyof TOverlay as K extends keyof TBase ? never : K]: TOverlay[K];
});

export type Array<TBase, TOverlay, TMode> = (
    [TMode] extends [infer TMode extends Core.ModeRecord] ? (
        ResolveArray<TBase, TOverlay, { concat: true }> extends infer TArray extends ZuordType.Array ? (
            Util.Unify.Array<TArray, TMode>
        ) : never
    ) : never
);

export type ResolveArray<TBase, TOverlay, TMode> = (
    TMode extends { concat: true } ? (
        [TBase, TOverlay] extends [infer A extends ZuordTuple.Nest, infer B extends ZuordTuple.Nest] ? (
            [...A, ...B]
        ) : TBase | TOverlay
    ) : TOverlay
);