import { $ZuordUtil as $Util } from ".";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace Unify {
    export type Hybrid<T, TMode> = TMode extends Core.Mode.Field ? (
        Unify.DistributeHybrid<T, Core.Mode.Resolve<[{ unifyPlain: true, unifyArray: true }, TMode]>>
    ) : never;

    export type DistributeHybrid<T, TMode> = (
        | (Trait.Exclude<T, Type.Primitive> extends infer TExcluded ? Unify.ResolveHybrid<TExcluded, TMode> : never)
        | (Trait.Extract<T, Type.Primitive> extends infer TExtracted ? TExtracted : never)
    ) extends infer T ? T : never;

    export type ResolveHybrid<T, TMode> = (
        [T] extends [Type.Plain] ? Unify.ResolvePlain<T, TMode> :
        [T] extends [Type.Tuple] ? Unify.ResolveTuple<T, TMode> :
        [T] extends [Type.Array] ? Unify.ResolveArray<T, TMode> : T
    );

    export type Plain<T, TMode> = TMode extends Core.Mode.Field ? (
        Unify.DistributePlain<T, Core.Mode.Resolve<[{ unifyPlain: true, unifyArray: false }, TMode]>>
    ) : never;

    export type DistributePlain<T, TMode> = (
        | (Trait.Exclude<T, Type.Plain> extends infer TExcluded ? TExcluded : never)
        | (Trait.Extract<T, Type.Plain> extends infer TExtracted extends Type.Plain ? Unify.ResolvePlain<TExtracted, TMode> : never)
    ) extends infer T ? T : never;

    export type ResolvePlain<T, TMode> = (
        TMode extends { unifyPlain: true } ? (
            Unify.ExtractPlain<T, TMode>
        ) : Unify.SkipPlain<T, TMode>
    );

    export type SkipPlain<T, TMode> = {
        [K in keyof T]: (
            TMode extends { unifyArray: true } ? (
                Unify.DistributeHybrid<T[K], TMode>
            ) : Unify.DistributePlain<T[K], TMode> 
        )
    } extends infer T ? T : never;

    export type ExtractPlain<T, TMode> =  (
        Unify.CollectPlain<T> extends infer TOne ? {
            [K in keyof TOne]: TMode extends { shallow: true } ? (
                TOne[K]
            ) : (
                TMode extends { unifyArray: true } 
                    ? Unify.DistributeHybrid<TOne[K], TMode>
                    : Unify.DistributePlain<TOne[K], TMode>
            )
        } : never
    );

    export type CollectPlain<T> = [""] extends [keyof T] ? never : {
        [K in T extends any ? keyof T : never]: T extends any ? K extends keyof T ? T[K] : never : never;
    };

    export type ResolveTuple<T, TMode> = (
        TMode extends { unifyTuple: true } ? (
            never
        ) : Unify.ResolveArray<T, TMode>
    );
    export type Array<T, TMode> = TMode extends Core.Mode.Field ? (
        Unify.DistributeArray<T, Core.Mode.Resolve<[{ unifyHybrid: false, unifyPlain: false, unifyArray: true }, TMode]>>
    ) : never;

    export type DistributeArray<T, TMode> = (
        | (Trait.Exclude<T, Type.Array> extends infer TExcluded ? TExcluded : never)
        | (Trait.Extract<T, Type.Array> extends infer TExtracted extends Type.Array ? Unify.ResolveArray<TExtracted, TMode>: never)
    ) extends infer T ? T : never;

    export type ResolveArray<T, TMode> = (
        TMode extends { unifyArray: true } ? (
            Unify.ExtractArray<T, TMode>
        ) : Unify.SkipArray<T, TMode>
    );

    export type SkipArray<T, TMode> = (
        T extends Type.ArrayOf<infer TInfer> ? ({
            [K in keyof TInfer]: Unify.DistributeHybrid<TInfer[K], TMode>;
        }[]) : never
    );
    export type ExtractArray<T, TMode> =(
        [T, TMode] extends [Type.Tuple, { unifyTuple: true }] ? (
            $Util.Tuple.Unify<T> extends infer TTuple ? ({
                [K in keyof TTuple]: TMode extends { shallow: true } ? (
                    TTuple[K]
                ) : (
                    TMode extends { unifyPlain: true } 
                        ? Unify.DistributeHybrid<TTuple[K], TMode>
                        : Unify.DistributeArray<TTuple[K], TMode>
                )
            }) : never
        ) :
        [T] extends [Type.Array] ? (
            TMode extends { shallow: true } ? (
                T[number][]
            ) : (
                TMode extends { unifyPlain: true } 
                    ? Unify.DistributeHybrid<T[number], TMode>[]
                    : Unify.DistributeArray<T[number], TMode>[]
            )
        ) : never
    );
}