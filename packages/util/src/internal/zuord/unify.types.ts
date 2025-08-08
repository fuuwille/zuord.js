import { $ZuordUtil as $Util } from ".";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace Unify {
    export type Hybrid<T, TMode> = TMode extends Core.Mode.Field ? (
        Unify.DistributeHybrid<T, Core.Mode.Resolve<[{ unifyPlain: true, unifyTuple: true, unifyArray: true }, TMode]>>
    ) : never;

    export type DistributeHybrid<T, TMode> = (
        [Trait.Has<T, Type.Plain>] extends [true] ? Unify.DistributePlain<T, TMode> :
        [Trait.Has<T, Type.Tuple>] extends [true] ? Unify.DistributeTuple<T, TMode> :
        [Trait.Has<T, Type.Array>] extends [true] ? Unify.DistributeArray<T, TMode> : T
    );

    export type Plain<T, TMode> = TMode extends Core.Mode.Field ? (
        Unify.DistributePlain<T, Core.Mode.Resolve<[{ unifyPlain: true, unifyTuple: false, unifyArray: false }, TMode]>>
    ) : never;

    export type DistributePlain<T, TMode> = [Trait.Eq<T, any>] extends [false] ? (
        (
            | (Unify.ExcludePlain<Trait.Exclude<T, Type.Plain>, TMode>)
            | (Unify.ExtractPlain<Trait.Extract<T, Type.Plain>, TMode>)
        ) extends infer T ? T : never
    ) : any;
    
    export type ExtractPlain<T, TMode> = (
        [TMode, Type.IsUnion<T>] extends [{ unifyPlain: true }, true] ? (
            Unify.ResolvePlain<T, TMode>
        ) : Unify.SkipPlain<T, TMode>
    );

    export type SkipPlain<T, TMode> = {
        [K in keyof T]: (
            TMode extends { unifyArray: true } ? (
                Unify.DistributeHybrid<T[K], TMode>
            ) : Unify.DistributePlain<T[K], TMode> 
        )
    } extends infer T ? T : never;

    export type ExcludePlain<T, TMode> = (
        TMode extends { unifyArray: true } | { unifyTuple: true }
            ? Unify.DistributeHybrid<T, TMode>
            : T
    )

    export type ResolvePlain<T, TMode> =  (
        $Util.Plain.Unify<T> extends infer TOne ? {
            [K in keyof TOne]: TMode extends { shallow: true } ? (
                TOne[K]
            ) : (
                TMode extends {unifyTuple: false} | { unifyArray: true } 
                    ? Unify.DistributeHybrid<TOne[K], TMode>
                    : Unify.DistributePlain<TOne[K], TMode>
            )
        } : never
    );

    export type Tuple<T, TMode> = TMode extends Core.Mode.Field ? (
        Unify.DistributeTuple<T, Core.Mode.Resolve<[{ unifyPlain: false, unifyTuple: true, unifyArray: false }, TMode]>>
    ) : never;

    export type DistributeTuple<T, TMode> = [Trait.Eq<T, any>] extends [false] ? (
        (
            | (Unify.ExcludeTuple<Trait.Exclude<T, Type.Tuple>, TMode>)
            | (Unify.ExtractTuple<Trait.Extract<T, Type.Tuple>, TMode>)
        ) extends infer T ? T : never
    ) : any;

    export type ExtractTuple<T, TMode> = (
        [TMode, Type.IsUnion<T>] extends [{ unifyTuple: true }, true] ? (
            ResolveTuple<T, TMode>
        ) : Unify.ExtractArray<T, TMode>
    );

    export type ExcludeTuple<T, TMode> = (
        TMode extends { unifyPlain: true } | { unifyArray: true }
            ? Unify.DistributeHybrid<T, TMode>
            : T
    )

    export type ResolveTuple<T, TMode> = (
        $Util.Tuple.Unify<T> extends infer TTuple ? ({
            [K in keyof TTuple]: TMode extends { shallow: true } ? (
                TTuple[K]
            ) : (
                TMode extends { unifyPlain: true } | { unifyArray: true }
                    ? Unify.DistributeHybrid<TTuple[K], TMode>
                    : Unify.DistributeArray<TTuple[K], TMode>
            )
        }) : never
    );

    export type Array<T, TMode> = TMode extends Core.Mode.Field ? (
        Unify.DistributeArray<T, Core.Mode.Resolve<[{ unifyPlain: false, unifyTuple: false, unifyArray: true }, TMode]>>
    ) : never;

    export type DistributeArray<T, TMode> = [Trait.Eq<T, any>] extends [false] ? (
        (
            | (Unify.ExcludeArray<Trait.Exclude<T, Type.Array>, TMode>)
            | (Unify.ExtractArray<Trait.Extract<T, Type.Array>, TMode>)
        ) extends infer T ? T : never
    ) : any;

    export type ExtractArray<T, TMode> = [T] extends [[]] ? never : (
        [TMode, Type.IsUnion<T>] extends [{ unifyArray: true }, true] ? (
            Unify.ResolveArray<T, TMode>
        ) : Unify.SkipArray<T, TMode>
    );

    export type SkipArray<T, TMode> = (
        T extends Type.ArrayOf<infer TInfer> ? ({
            [K in keyof TInfer]: Unify.DistributeHybrid<TInfer[K], TMode>;
        }[]) : never
    );

    export type ExcludeArray<T, TMode> = (
        TMode extends { unifyPlain: true } | { unifyTuple: true }
            ? Unify.DistributeHybrid<T, TMode>
            : T
    )

    export type ResolveArray<T, TMode> = [T] extends [Type.Array] ? (
        TMode extends { shallow: true } ? (
            T[number][]
        ) : (
            TMode extends { unifyPlain: true } | { unifyTuple: true } 
                ? Unify.DistributeHybrid<T[number], TMode>[]
                : Unify.DistributeArray<T[number], TMode>[]
        )
    ) : never
}