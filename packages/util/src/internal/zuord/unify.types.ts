import type { $ZuordUtil } from "..";
import type { ZuordType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";
import type { ZuordTrait } from "@zuord/trait";

export declare namespace Unify {
    export type Hybrid<T, TMode> = TMode extends ZuordCore.Mode.Flags ? (
        Unify.DistributeHybrid<T, ZuordCore.Mode.Resolve<[{ unifyPlain: true, unifyTuple: true, unifyArray: true }, TMode]>>
    ) : never;

    export type DistributeHybrid<T, TMode> = (
        [ZuordTrait.Has.Base<T, ZuordType.Plain>] extends [true] ? Unify.DistributePlain<T, TMode> :
        [ZuordTrait.Has.Base<T, ZuordType.Tuple>] extends [true] ? Unify.DistributeTuple<T, TMode> :
        [ZuordTrait.Has.Base<T, ZuordType.Array>] extends [true] ? Unify.DistributeArray<T, TMode> : T
    );

    export type Plain<T, TMode> = TMode extends ZuordCore.Mode.Flags ? (
        Unify.DistributePlain<T, ZuordCore.Mode.Resolve<[{ unifyPlain: true, unifyTuple: false, unifyArray: false }, TMode]>>
    ) : never;

    export type DistributePlain<T, TMode> = [ZuordTrait.Eq.Both<T, any>] extends [false] ? (
        (
            | (Unify.ExcludePlain<ZuordTrait.Exclude.Is<T, ZuordType.Plain>, TMode>)
            | (Unify.ExtractPlain<ZuordTrait.Extract.Is<T, ZuordType.Plain>, TMode>)
        ) extends infer T ? T : never
    ) : any;
    
    export type ExcludePlain<T, TMode> = (
        TMode extends { unifyArray: true } | { unifyTuple: true }
            ? Unify.DistributeHybrid<T, TMode>
            : T
    )

    export type ExtractPlain<T, TMode> = (
        [$ZuordUtil.Union.IsUnion<T>, TMode] extends [true, { unifyPlain: true }] ? (
            Unify.ResolvePlain<T, TMode>
        ) : Unify.SkipPlain<$ZuordUtil.Union.ToIntersection<T>, TMode>
    );

    export type ResolvePlain<T, TMode> =  (
        $ZuordUtil.Plain.Unify<T> extends infer TOne ? {
            [K in keyof TOne]: TMode extends { shallow: true } ? (
                TOne[K]
            ) : (
                TMode extends {unifyTuple: false} | { unifyArray: true } 
                    ? Unify.DistributeHybrid<TOne[K], TMode>
                    : Unify.DistributePlain<TOne[K], TMode>
            )
        } : never
    );

    export type SkipPlain<T, TMode> = {
        [K in keyof T]: (
            TMode extends { unifyArray: true } ? (
                Unify.DistributeHybrid<T[K], TMode>
            ) : Unify.DistributePlain<T[K], TMode> 
        )
    } extends infer T ? T : never;

    export type Tuple<T, TMode> = TMode extends ZuordCore.Mode.Flags ? (
        Unify.DistributeTuple<T, ZuordCore.Mode.Resolve<[{ unifyPlain: false, unifyTuple: true, unifyArray: false }, TMode]>>
    ) : never;

    export type DistributeTuple<T, TMode> = [ZuordTrait.Eq.Both<T, any>] extends [false] ? (
        (
            | (Unify.ExcludeTuple<ZuordTrait.Exclude.Is<T, ZuordType.Tuple>, TMode>)
            | (Unify.ExtractTuple<ZuordTrait.Extract.Is<T, ZuordType.Tuple>, TMode>)
        ) extends infer T ? T : never
    ) : any;

    export type ExcludeTuple<T, TMode> = (
        TMode extends { unifyPlain: true } | { unifyArray: true }
            ? Unify.DistributeHybrid<T, TMode>
            : T
    )

    export type ExtractTuple<T, TMode> = (
        [$ZuordUtil.Union.IsUnion<T>, TMode] extends [true, { unifyTuple: true }] ? (
            ResolveTuple<T, TMode>
        ) : Unify.ExtractArray<T, TMode>
    );

    export type ResolveTuple<T, TMode> = (
        $ZuordUtil.Tuple.Unify<T> extends infer TTuple ? ({
            [K in keyof TTuple]: TMode extends { shallow: true } ? (
                TTuple[K]
            ) : (
                TMode extends { unifyPlain: true } | { unifyArray: true }
                    ? Unify.DistributeHybrid<TTuple[K], TMode>
                    : Unify.DistributeArray<TTuple[K], TMode>
            )
        }) : never
    );

    export type Array<T, TMode> = TMode extends ZuordCore.Mode.Flags ? (
        Unify.DistributeArray<T, ZuordCore.Mode.Resolve<[{ unifyPlain: false, unifyTuple: false, unifyArray: true }, TMode]>>
    ) : never;

    export type DistributeArray<T, TMode> = [ZuordTrait.Eq.Both<T, any>] extends [false] ? (
        (
            | (Unify.ExcludeArray<ZuordTrait.Exclude.Is<T, ZuordType.Array>, TMode>)
            | (Unify.ExtractArray<ZuordTrait.Extract.Is<T, ZuordType.Array>, TMode>)
        ) extends infer T ? T : never
    ) : any;

    export type ExcludeArray<T, TMode> = (
        TMode extends { unifyPlain: true } | { unifyTuple: true }
            ? Unify.DistributeHybrid<T, TMode>
            : T
    )

    export type ExtractArray<T, TMode> = [T] extends [[]] ? never : (
        [$ZuordUtil.Union.IsUnion<T>, TMode] extends [true, { unifyArray: true }] ? (
            Unify.ResolveArray<T, TMode>
        ) : Unify.SkipArray<$ZuordUtil.Union.ToIntersection<T>, TMode>
    );

    export type ResolveArray<T, TMode> = [T] extends [ZuordType.Array] ? (
        TMode extends { shallow: true } ? (
            T[number][]
        ) : (
            TMode extends { unifyPlain: true } | { unifyTuple: true } 
                ? Unify.DistributeHybrid<T[number], TMode>[]
                : Unify.DistributeArray<T[number], TMode>[]
        )
    ) : never

    export type SkipArray<T, TMode> = (
        T extends ZuordType.Array<infer TInfer> ? Unify.DistributeHybrid<TInfer, TMode>[] : never
    );
}