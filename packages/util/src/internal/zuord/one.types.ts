import { $ZuordUtil } from ".";
import { ZuordType as Type } from "@zuord/type";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace One {
    export type ResolveHybrid<T, TMode> = (
        [Trait.Eq<T, any>] extends [true] ? any :
        [Trait.Has<T, Type.Primitive>] extends [true] ? One.ResolvePrimitive<T, TMode> :
        [T] extends [Type.Plain] ? One.ResolvePlain<T, TMode> :
        [T] extends [Type.Array]? One.ResolveArray<T, TMode> : T
    );

    export type ResolvePrimitive<T, TMode> = (
        | (Trait.Exclude<T, Type.Primitive> extends infer TExcluded ? ResolveExcludedPrimitive<TExcluded, TMode> : never)
        | (Trait.Extract<T, Type.Primitive> extends infer TExtracted ? TExtracted : never)
    ) extends infer T ? T : never;

    export type ResolveExcludedPrimitive<T, TMode> = (
        One.ResolveHybrid<T, TMode> extends infer THybrid ? (
            [{}] extends [THybrid] ? never : THybrid
        ) : never
    );
    
    export type ResolvePlain<T extends Type.Plain, TMode> = (
        (One.ResolveRequiredPlain<T> & One.ResolvePlainOptional<T>) extends infer TOne ? {
            [K in keyof TOne]: TMode extends { shallow: true } ? TOne[K] : One.ResolveHybrid<TOne[K], TMode>;
        } : never
    ) extends infer T ? T : never;

    export type ResolveRequiredPlain<T> = {
        [K in $ZuordUtil.Keys.Required<T>]: T[K]
    };

    export type ResolvePlainOptional<T> = {
        [K in $ZuordUtil.Keys.Optional<T>]?: T extends any ? (
            K extends keyof T ? T[K] : never
        ) : never;
    };

    export type ResolveArray<T extends Type.Array, TMode> = (
        ResolveHybrid<T[number], TMode>[]
    ) extends infer T ? T : never;
}