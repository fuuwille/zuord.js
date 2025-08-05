import { $ZuordUtil } from ".";
import { ZuordType as Type } from "@zuord/type";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace One {
    export type ResolveHybrid<T, TMode> = (
        [Trait.Eq<T, any>] extends [true] ? any :
        [Trait.Is<T, Type.Primitive>] extends [true] ? T :
        [Trait.Has<T, Type.Plain>] extends [true] ? One.ResolvePlain<T, TMode> :
        [Trait.Has<T, Type.Array>] extends [true] ? One.ResolveArray<T, TMode> : T
    );

    export type ResolvePlain<T, TMode> = (
        | (Trait.Exclude<T, Type.Plain> extends infer TExcluded ? One.ResolveHybrid<TExcluded, TMode> : never)
        | (Trait.Extract<T, Type.Plain> extends infer TExtracted extends Type.Plain ? One.ResolvePlainComposite<TExtracted, TMode> : never)
    );

    export type ResolvePlainComposite<T extends Type.Plain, TMode> = (
        (One.ResolvePlainRequired<T> & One.ResolvePlainOptional<T>) extends infer TOne ? {
            [K in keyof TOne]: TMode extends { shallow: true } ? TOne[K] : One.ResolveHybrid<TOne[K], TMode>;
        } : never
    ) extends infer T ? T : never;

    export type ResolvePlainRequired<T> = {
        [K in $ZuordUtil.Keys.Required<T>]: T[K]
    };

    export type ResolvePlainOptional<T> = {
        [K in $ZuordUtil.Keys.Optional<T>]?: T extends any ? (
            K extends keyof T ? T[K] : never
        ) : never;
    };

    export type ResolveArray<T, TMode> = (
        | (Trait.Exclude<T, Type.Array> extends infer TExcluded ? One.ResolveHybrid<TExcluded, TMode> : never)
        | (Trait.Extract<T, Type.Array> extends infer TExtracted extends Type.Array ? One.ResolveArrayComposite<TExtracted, TMode> : never)
    )

    export type ResolveArrayComposite<T extends Type.Array, TMode> = (
        ResolveHybrid<T[number], TMode>[]
    ) extends infer T ? T : never;
}