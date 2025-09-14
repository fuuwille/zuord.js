import type { ZuordType, ZuordTuple } from "@zuord/type";
import type { ZuordCore as Core } from "@zuord/core";
import type { ZuordUtil as Util } from "@zuord/util";

/**
 * @internal
 */
export type Plain<TSource, TContent, TMode> = (
    [TMode] extends [infer TMode extends Core.ModeRecord] ? (
        ResolvePlain<TSource, TContent, TMode> extends infer TPlain extends ZuordType.Plain ? (
            Util.Unify.Plain<TPlain, Core.ModeResolve<[TMode, { unifyArray: true }]>>
        ) : never
    ) : never
);

/**
 * @internal
 */
export type Array<TSource, TContent, TMode> = (
    [TMode] extends [infer TMode extends Core.ModeRecord] ? (
        ResolveArray<TSource, TContent, { concat: true }> extends infer TArray extends ZuordType.Array ? (
            Util.Unify.Array<TArray, TMode>
        ) : never
    ) : never
);

//

/**
 * @internal
 */
export type ResolveAny<TSource, TContent, TMode> = (
    [TSource, TContent] extends [infer A extends ZuordType.Plain, infer B extends ZuordType.Plain] ? ResolvePlain<A, B, TMode> :
    [TSource, TContent] extends [infer A extends ZuordType.Array, infer B extends ZuordType.Array] ? ResolveArray<A, B, TMode> : TContent
);

/**
 * @internal
 */
export type ResolvePlain<TSource, TContent, TMode> = (
    (ResolvePlainOverrides<TSource, TContent, TMode> & ResolvePlainExtras<TSource, TContent>) extends infer TIntegrated ? ({
        -readonly [K in keyof TIntegrated]: TIntegrated[K];
    }) : never
);

/**
 * @internal
 */
export type ResolvePlainOverrides<TSource, TContent, TMode> = ({
    [K in keyof TSource]: K extends keyof TContent ? (
        TMode extends { shallow: true } ? (
            TContent[K]
        ) : ResolveAny<TSource[K], TContent[K], TMode>
    ) : TSource[K];
});

/**
 * @internal
 */
export type ResolvePlainExtras<TSource, TContent> = ({
    [K in keyof TContent as K extends keyof TSource ? never : K]: TContent[K];
});

/**
 * @internal
 */
export type ResolveArray<TSource, TContent, TMode> = (
    TMode extends { concat: true } ? (
        [TSource, TContent] extends [infer A extends ZuordTuple.Nest, infer B extends ZuordTuple.Nest] ? (
            [...A, ...B]
        ) : TSource | TContent
    ) : TContent
);