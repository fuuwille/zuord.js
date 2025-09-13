import type { $ZuordUtil } from "..";
import type { ZuordType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";
import type { ZuordTrait } from "@zuord/trait";

export type Hybrid<T, TMode> = TMode extends ZuordCore.ModeRecord ? (
    DistributeHybrid<T, ZuordCore.ModeResolve<[{ unifyPlain: true, unifyTuple: true, unifyArray: true }, TMode]>>
) : never;

export type DistributeHybrid<T, TMode> = (
    [ZuordTrait.Has.Base<T, ZuordType.Plain>] extends [true] ? DistributePlain<T, TMode> :
    [ZuordTrait.Has.Base<T, ZuordType.Tuple>] extends [true] ? DistributeTuple<T, TMode> :
    [ZuordTrait.Has.Base<T, ZuordType.Array>] extends [true] ? DistributeArray<T, TMode> : T
);

export type Plain<T, TMode> = TMode extends ZuordCore.ModeRecord ? (
    DistributePlain<T, ZuordCore.ModeResolve<[{ unifyPlain: true, unifyTuple: false, unifyArray: false }, TMode]>>
) : never;

export type DistributePlain<T, TMode> = [ZuordTrait.Eq.Both<T, any>] extends [false] ? (
    (
        | (ExcludePlain<ZuordTrait.Exclude.Is<T, ZuordType.Plain>, TMode>)
        | (ExtractPlain<ZuordTrait.Extract.Is<T, ZuordType.Plain>, TMode>)
    ) extends infer T ? T : never
) : any;

export type ExcludePlain<T, TMode> = (
    TMode extends { unifyArray: true } | { unifyTuple: true }
        ? DistributeHybrid<T, TMode>
        : T
)

export type ExtractPlain<T, TMode> = (
    [$ZuordUtil.Union.IsUnion<T>, TMode] extends [true, { unifyPlain: true }] ? (
        ResolvePlain<T, TMode>
    ) : SkipPlain<$ZuordUtil.Union.ToIntersection<T>, TMode>
);

export type ResolvePlain<T, TMode> =  (
    $ZuordUtil.Plain.Unify<T> extends infer TOne ? {
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

export type DistributeTuple<T, TMode> = [ZuordTrait.Eq.Both<T, any>] extends [false] ? (
    (
        | (ExcludeTuple<ZuordTrait.Exclude.Is<T, ZuordType.Tuple>, TMode>)
        | (ExtractTuple<ZuordTrait.Extract.Is<T, ZuordType.Tuple>, TMode>)
    ) extends infer T ? T : never
) : any;

export type ExcludeTuple<T, TMode> = (
    TMode extends { unifyPlain: true } | { unifyArray: true }
        ? DistributeHybrid<T, TMode>
        : T
)

export type ExtractTuple<T, TMode> = (
    [$ZuordUtil.Union.IsUnion<T>, TMode] extends [true, { unifyTuple: true }] ? (
        ResolveTuple<T, TMode>
    ) : ExtractArray<T, TMode>
);

export type ResolveTuple<T, TMode> = (
    $ZuordUtil.Tuple.Unify<T> extends infer TTuple ? ({
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

export type DistributeArray<T, TMode> = [ZuordTrait.Eq.Both<T, any>] extends [false] ? (
    (
        | (ExcludeArray<ZuordTrait.Exclude.Is<T, ZuordType.Array>, TMode>)
        | (ExtractArray<ZuordTrait.Extract.Is<T, ZuordType.Array>, TMode>)
    ) extends infer T ? T : never
) : any;

export type ExcludeArray<T, TMode> = (
    TMode extends { unifyPlain: true } | { unifyTuple: true }
        ? DistributeHybrid<T, TMode>
        : T
)

export type ExtractArray<T, TMode> = [T] extends [[]] ? never : (
    [$ZuordUtil.Union.IsUnion<T>, TMode] extends [true, { unifyArray: true }] ? (
        ResolveArray<T, TMode>
    ) : SkipArray<$ZuordUtil.Union.ToIntersection<T>, TMode>
);

export type ResolveArray<T, TMode> = [T] extends [ZuordType.Array] ? (
    TMode extends { shallow: true } ? (
        T[number][]
    ) : (
        TMode extends { unifyPlain: true } | { unifyTuple: true } 
            ? DistributeHybrid<T[number], TMode>[]
            : DistributeArray<T[number], TMode>[]
    )
) : never

export type SkipArray<T, TMode> = (
    T extends ZuordType.Array<infer TInfer> ? DistributeHybrid<TInfer, TMode>[] : never
);