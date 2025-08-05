import { $ZuordUtil } from ".";
import { ZuordType as Type } from "@zuord/type";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace One {
    export type ResolveHybrid<T, TMode> = (
        [Trait.Eq<T, any>] extends [true] ? any :
        [Trait.Is<T, Type.Primitive>] extends [true] ? T :
        [Trait.Has<T, Type.Plain>] extends [true] ? One.ResolvePlain<T, TMode> : T
    );

    export type ResolvePlain<T, TMode> = (
        (One.ResolvePlainRequired<T> & One.ResolvePlainOptional<T>) extends infer TOne ? {
            [K in keyof TOne]: TMode extends { shallow: true } ? TOne[K] : One.ResolveHybrid<TOne[K], TMode>;
        } : never
    )

    export type ResolvePlainRequired<T> = {
        [K in $ZuordUtil.Keys.Required<T>]: T[K]
    };

    export type ResolvePlainOptional<T> = {
        [K in $ZuordUtil.Keys.Optional<T>]?: T[K]
    };
}