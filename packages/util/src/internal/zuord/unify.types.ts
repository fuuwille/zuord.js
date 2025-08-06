import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace Unify {
    export type ResolveHybrid<T, TMode extends Core.Mode.Field> = (
        [Trait.Eq<T, any>] extends [true] ? any :
        [Trait.Has<T, Type.Primitive>] extends [true] ? Unify.ResolvePrimitive<T, TMode> :
        [T] extends [Type.Plain] ? Unify.ResolveHybridPlain<T, TMode> :
        [T] extends [Type.Array] ? Unify.ResolveHybridArray<T, TMode> : T
    );

    export type ResolvePrimitive<T, TMode extends Core.Mode.Field> = (
        | (Trait.Exclude<T, Type.Primitive> extends infer TExcluded ? ResolveExcludedPrimitive<TExcluded, TMode> : never)
        | (Trait.Extract<T, Type.Primitive> extends infer TExtracted ? TExtracted : never)
    ) extends infer T ? T : never;

    export type ResolveExcludedPrimitive<T, TMode extends Core.Mode.Field> = (
        Unify.ResolveHybrid<T, TMode> extends infer THybrid ? (
            [{}] extends [THybrid] ? never : THybrid
        ) : never
    );
    
    export type ResolvePlain<T, TMode extends Core.Mode.Field> = (
        | (Trait.Exclude<T, Type.Plain> extends infer TExcluded ? TExcluded : never)
        | (Trait.Extract<T, Type.Plain> extends infer TExtracted extends Type.Plain ? ResolveExtractedPlain<TExtracted, TMode> : never)
    ) extends infer T ? T : never;

    export type ResolveHybridPlain<T extends Type.Plain, TMode extends Core.Mode.Field> = (
        TMode extends { unifyPlain: true } ? (
            ResolveExtractedPlain<T, Core.Mode.Resolve<[TMode, { $hybrid: true }]>>
        ) : ResolveSkippedPlain<T, TMode>
    );

    export type ResolveSkippedPlain<T extends Type.Plain, TMode extends Core.Mode.Field> = {
        [K in keyof T]: ResolveHybrid<T[K], TMode>;
    } extends infer T ? T : never;

    export type ResolveExtractedPlain<T extends Type.Plain, TMode extends Core.Mode.Field> =  (
        Unify.ResolveCompositedPlain<T> extends infer TOne ? {
            [K in keyof TOne]: TMode extends { shallow: true } ? (
                TOne[K]
            ) : (
                TMode extends { $hybrid: true } 
                    ? Unify.ResolveHybrid<TOne[K], TMode>
                    : Unify.ResolvePlain<TOne[K], TMode>
            )
        } : never
    );

    export type ResolveCompositedPlain<T> = {
        [K in T extends any ? keyof T : never]: T extends any ? K extends keyof T ? T[K] : never : never;
    }

    export type ResolveArray<T, TMode extends Core.Mode.Field> = (
        | (Trait.Exclude<T, Type.Array> extends infer TExcluded ? TExcluded : never)
        | (Trait.Extract<T, Type.Array> extends infer TExtracted extends Type.Array ? ResolveExtractedArray<TExtracted, TMode>: never)
    ) extends infer T ? T : never;

    export type ResolveHybridArray<T extends Type.Array, TMode extends Core.Mode.Field> = (
        TMode extends { unifyArray: true } ? (
            ResolveExtractedArray<T, Core.Mode.Resolve<[TMode, { $hybrid: true }]>>
        ) : ResolveSkippedArray<T, TMode>
    );

    export type ResolveSkippedArray<T extends Type.Array, TMode extends Core.Mode.Field> = (
        T extends Type.ArrayOf<infer TInfer> ? ({
            [K in keyof TInfer]: ResolveHybrid<TInfer[K], TMode>;
        }[]) : never
    );

    export type ResolveExtractedArray<T extends Type.Array, TMode extends Core.Mode.Field> =(
        [T] extends [never] ? never : ResolveDistributedArray<T, TMode>[]
    );

    export type ResolveDistributedArray<T extends Type.Array, TMode extends Core.Mode.Field> = (
        TMode extends { shallow: true } ? (
            T[number]
        ) : (
            TMode extends { $hybrid: true } 
                ? ResolveHybrid<T[number], TMode>
                : ResolveArray<T[number], TMode>
        )
    )
}