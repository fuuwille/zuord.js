import { $ZuordUtil } from ".";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace One {
    export type ResolveHybrid<T, TMode extends Core.Mode.Field> = (
        [Trait.Eq<T, any>] extends [true] ? any :
        [Trait.Has<T, Type.Primitive>] extends [true] ? One.ResolvePrimitive<T, TMode> :
        [T] extends [Type.Plain] ? One.ResolveHybridPlain<T, TMode> :
        [T] extends [Type.Array] ? One.ResolveExtractedArray<T, TMode> : T
    );

    export type ResolvePrimitive<T, TMode extends Core.Mode.Field> = (
        | (Trait.Exclude<T, Type.Primitive> extends infer TExcluded ? ResolveExcludedPrimitive<TExcluded, TMode> : never)
        | (Trait.Extract<T, Type.Primitive> extends infer TExtracted ? TExtracted : never)
    ) extends infer T ? T : never;

    export type ResolveExcludedPrimitive<T, TMode extends Core.Mode.Field> = (
        One.ResolveHybrid<T, TMode> extends infer THybrid ? (
            [{}] extends [THybrid] ? never : THybrid
        ) : never
    );
    
    export type ResolvePlain<T, TMode extends Core.Mode.Field> = (
        | (Trait.Exclude<T, Type.Plain> extends infer TExcluded ? TExcluded : never)
        | (Trait.Extract<T, Type.Plain> extends infer TExtracted extends Type.Plain ? ResolveExtractedPlain<TExtracted, TMode> : never)
    ) extends infer T ? T : never;

    export type ResolveHybridPlain<T extends Type.Plain, TMode extends Core.Mode.Field> = (
        TMode extends { onePlain: true } ? (
            ResolveExtractedPlain<T, Core.Mode.Resolve<[TMode, { $hybrid: true }]>>
        ) : ResolveSkippedPlain<T, TMode>
    );

    export type ResolveSkippedPlain<T extends Type.Plain, TMode extends Core.Mode.Field> = {
        [K in keyof T]: ResolveHybrid<T[K], TMode>;
    } extends infer T ? T : never;

    export type ResolveExtractedPlain<T extends Type.Plain, TMode extends Core.Mode.Field> =  (
        (One.ResolveRequiredPlain<T> & One.ResolveOptionalPlain<T>) extends infer TOne ? {
            [K in keyof TOne]: TMode extends { shallow: true } ? (
                TOne[K]
            ) : (
                TMode extends { $hybrid: true } 
                    ? One.ResolveHybrid<TOne[K], TMode>
                    : One.ResolvePlain<TOne[K], TMode>
            )
        } : never
    );

    export type ResolveRequiredPlain<T> = {
        [K in $ZuordUtil.Keys.Required<T>]: T[K]
    };

    export type ResolveOptionalPlain<T> = {
        [K in $ZuordUtil.Keys.Optional<T>]?: T extends any ? (
            K extends keyof T ? T[K] : never
        ) : never;
    };

    export type ResolveArray<T, TMode extends Core.Mode.Field> = (
        | (Trait.Exclude<T, Type.Array> extends infer TExcluded ? TExcluded : never)
        | (Trait.Extract<T, Type.Array> extends infer TExtracted extends Type.Array ? ResolveExtractedArray<TExtracted, TMode>: never)
    ) extends infer T ? T : never;

    export type ResolveHybridArray<T extends Type.Array, TMode extends Core.Mode.Field> = (
        TMode extends { oneArray: true } ? (
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