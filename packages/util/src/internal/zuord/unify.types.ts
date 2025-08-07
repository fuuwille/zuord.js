import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace Unify {
    export type Hybrid<T, TMode> = TMode extends Core.Mode.Field ? (
        Unify.HandleHybrid<T, Core.Mode.Resolve<[{ unifyHybrid: true, unifyPlain: true, unifyArray: true }, TMode]>>
    ) : never;

    export type HandleHybrid<T, TMode extends Core.Mode.Field> = (
        [Trait.Eq<T, any>] extends [true] ? any :
        [Trait.Has<T, Type.Primitive>] extends [true] ? Unify.HandlePrimitive<T, TMode> :
        Unify.ResolveHybrid<T, TMode>
    );

    export type ResolveHybrid<T, TMode extends Core.Mode.Field> = (
        [T] extends [Type.Plain] ? Unify.ResolvePlain<T, TMode> :
        [T] extends [Type.Array] ? Unify.ResolveArray<T, TMode> : T
    );

    export type HandlePrimitive<T, TMode extends Core.Mode.Field> = (
        | (Trait.Exclude<T, Type.Primitive> extends infer TExcluded ? Unify.ResolveNonPrimitive<TExcluded, TMode> : never)
        | (Trait.Extract<T, Type.Primitive> extends infer TExtracted ? TExtracted : never)
    ) extends infer T ? T : never;

    export type ResolveNonPrimitive<T, TMode extends Core.Mode.Field> = (
        Unify.ResolveHybrid<T, TMode> extends infer THybrid ? (
            [{}] extends [THybrid] ? never : THybrid
        ) : never
    );

    export type Plain<T, TMode> = TMode extends Core.Mode.Field ? (
        Unify.HandlePlain<T, Core.Mode.Resolve<[{ unifyHybrid: false, unifyPlain: true, unifyArray: false }, TMode]>>
    ) : never;

    export type HandlePlain<T, TMode extends Core.Mode.Field> = (
        | (Trait.Exclude<T, Type.Plain> extends infer TExcluded ? TExcluded : never)
        | (Trait.Extract<T, Type.Plain> extends infer TExtracted extends Type.Plain ? Unify.ResolvePlain<TExtracted, TMode> : never)
    ) extends infer T ? T : never;

    export type ResolvePlain<T extends Type.Plain, TMode extends Core.Mode.Field> = (
        TMode extends { unifyPlain: true } ? (
            Unify.CompletePlain<T, TMode>
        ) : Unify.SkipPlain<T, TMode>
    );

    export type SkipPlain<T extends Type.Plain, TMode extends Core.Mode.Field> = {
        [K in keyof T]: (
            TMode extends { unifyHybrid: true } ? (
                Unify.HandleHybrid<T[K], TMode>
            ) : Unify.HandlePlain<T[K], TMode> 
        )
    } extends infer T ? T : never;

    export type CompletePlain<T extends Type.Plain, TMode extends Core.Mode.Field> =  (
        Unify.CollectPlain<T> extends infer TOne ? {
            [K in keyof TOne]: TMode extends { shallow: true } ? (
                TOne[K]
            ) : (
                TMode extends { unifyHybrid: true } 
                    ? Unify.HandleHybrid<TOne[K], TMode>
                    : Unify.HandlePlain<TOne[K], TMode>
            )
        } : never
    );

    export type CollectPlain<T> = {
        [K in T extends any ? keyof T : never]: T extends any ? K extends keyof T ? T[K] : never : never;
    }

    export type HandleArray<T, TMode extends Core.Mode.Field> = (
        | (Trait.Exclude<T, Type.Array> extends infer TExcluded ? TExcluded : never)
        | (Trait.Extract<T, Type.Array> extends infer TExtracted extends Type.Array ? Unify.CompleteArray<TExtracted, TMode>: never)
    ) extends infer T ? T : never;

    export type ResolveArray<T extends Type.Array, TMode extends Core.Mode.Field> = (
        TMode extends { unifyArray: true } ? (
            Unify.CompleteArray<T, Core.Mode.Resolve<[TMode, { unifyHybrid: true }]>>
        ) : Unify.SkipArray<T, TMode>
    );

    export type SkipArray<T extends Type.Array, TMode extends Core.Mode.Field> = (
        T extends Type.ArrayOf<infer TInfer> ? ({
            [K in keyof TInfer]: Unify.HandleHybrid<TInfer[K], TMode>;
        }[]) : never
    );

    export type CompleteArray<T extends Type.Array, TMode extends Core.Mode.Field> =(
        [T] extends [never] ? never : Unify.CollectArray<T, TMode>[]
    );

    export type CollectArray<T extends Type.Array, TMode extends Core.Mode.Field> = (
        TMode extends { shallow: true } ? (
            T[number]
        ) : (
            TMode extends { unifyHybrid: true } 
                ? Unify.HandleHybrid<T[number], TMode>
                : Unify.HandleArray<T[number], TMode>
        )
    )
}