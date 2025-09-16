import type { $TypeUtil } from ".";
import type { FundType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";
import type { TypeTrait } from "@zuord/trait";

export type Hybrid<T, TMode> = TMode extends ZuordCore.ModeRecord ? (
    DistributeHybrid<T, ZuordCore.ModeResolve<[{ unifyPlain: true, unifyTuple: true, unifyArray: true }, TMode]>>
) : never;

export type DistributeHybrid<T, TMode> = (
    [TypeTrait.Has.Base<T, FundType.Plain>] extends [true] ? DistributePlain<T, TMode> :
    [TypeTrait.Has.Base<T, FundType.Tuple>] extends [true] ? DistributeTuple<T, TMode> :
    [TypeTrait.Has.Base<T, FundType.Array>] extends [true] ? DistributeArray<T, TMode> : T
);

export type Plain<T, TMode> = TMode extends ZuordCore.ModeRecord ? (
    DistributePlain<T, ZuordCore.ModeResolve<[{ unifyPlain: true, unifyTuple: false, unifyArray: false }, TMode]>>
) : never;

export type DistributePlain<T, TMode> = [TypeTrait.Eq.Both<T, any>] extends [false] ? (
    (
        | (ExcludePlain<TypeTrait.Exclude.Is<T, FundType.Plain>, TMode>)
        | (ExtractPlain<TypeTrait.Extract.Is<T, FundType.Plain>, TMode>)
    ) extends infer T ? T : never
) : any;

export type ExcludePlain<T, TMode> = (
    TMode extends { unifyArray: true } | { unifyTuple: true }
        ? DistributeHybrid<T, TMode>
        : T
)

export type ExtractPlain<T, TMode> = (
    [$TypeUtil.Union.IsUnion<T>, TMode] extends [true, { unifyPlain: true }] ? (
        ResolvePlain<T, TMode>
    ) : SkipPlain<$TypeUtil.Union.ToIntersection<T>, TMode>
);

export type ResolvePlain<T, TMode> =  (
    $TypeUtil.Plain.Unify<T> extends infer TOne ? {
        [K in keyof TOne]: TMode extends { shallow: true } ? (
            TOne[K]
        ) : (
            TMode extends {unifyTuple: false} | { unifyArray: true } 
                ? DistributeHybrid<TOne[K], TMode>
                : DistributePlain<TOne[K], TMode>
        )
    } : never
);

export type SkipPlain<T, TMode> = {
    [K in keyof T]: (
        TMode extends { unifyArray: true } ? (
            DistributeHybrid<T[K], TMode>
        ) : DistributePlain<T[K], TMode> 
    )
} extends infer T ? T : never;

export type Tuple<T, TMode> = TMode extends ZuordCore.ModeRecord ? (
    DistributeTuple<T, ZuordCore.ModeResolve<[{ unifyPlain: false, unifyTuple: true, unifyArray: false }, TMode]>>
) : never;

export type DistributeTuple<T, TMode> = [TypeTrait.Eq.Both<T, any>] extends [false] ? (
    (
        | (ExcludeTuple<TypeTrait.Exclude.Is<T, FundType.Tuple>, TMode>)
        | (ExtractTuple<TypeTrait.Extract.Is<T, FundType.Tuple>, TMode>)
    ) extends infer T ? T : never
) : any;

export type ExcludeTuple<T, TMode> = (
    TMode extends { unifyPlain: true } | { unifyArray: true }
        ? DistributeHybrid<T, TMode>
        : T
)

export type ExtractTuple<T, TMode> = (
    [$TypeUtil.Union.IsUnion<T>, TMode] extends [true, { unifyTuple: true }] ? (
        ResolveTuple<T, TMode>
    ) : ExtractArray<T, TMode>
);

export type ResolveTuple<T, TMode> = (
    $TypeUtil.Tuple.Unify<T> extends infer TTuple ? ({
        [K in keyof TTuple]: TMode extends { shallow: true } ? (
            TTuple[K]
        ) : (
            TMode extends { unifyPlain: true } | { unifyArray: true }
                ? DistributeHybrid<TTuple[K], TMode>
                : DistributeArray<TTuple[K], TMode>
        )
    }) : never
);

export type Array<T, TMode> = TMode extends ZuordCore.ModeRecord ? (
    DistributeArray<T, ZuordCore.ModeResolve<[{ unifyPlain: false, unifyTuple: false, unifyArray: true }, TMode]>>
) : never;

export type DistributeArray<T, TMode> = [TypeTrait.Eq.Both<T, any>] extends [false] ? (
    (
        | (ExcludeArray<TypeTrait.Exclude.Is<T, FundType.Array>, TMode>)
        | (ExtractArray<TypeTrait.Extract.Is<T, FundType.Array>, TMode>)
    ) extends infer T ? T : never
) : any;

export type ExcludeArray<T, TMode> = (
    TMode extends { unifyPlain: true } | { unifyTuple: true }
        ? DistributeHybrid<T, TMode>
        : T
)

export type ExtractArray<T, TMode> = [T] extends [[]] ? never : (
    [$TypeUtil.Union.IsUnion<T>, TMode] extends [true, { unifyArray: true }] ? (
        ResolveArray<T, TMode>
    ) : SkipArray<$TypeUtil.Union.ToIntersection<T>, TMode>
);

export type ResolveArray<T, TMode> = [T] extends [FundType.Array] ? (
    TMode extends { shallow: true } ? (
        T[number][]
    ) : (
        TMode extends { unifyPlain: true } | { unifyTuple: true } 
            ? DistributeHybrid<T[number], TMode>[]
            : DistributeArray<T[number], TMode>[]
    )
) : never

export type SkipArray<T, TMode> = (
    T extends FundType.Array<infer TInfer> ? DistributeHybrid<TInfer, TMode>[] : never
);