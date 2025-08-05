import { $ZuordUtil } from ".";
import { ZuordType as Type } from "@zuord/type";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace One {
    export type Hybrid<T, TMode> = (
        [Trait.Eq<T, any>] extends [true] ? any :
        [Trait.Is<T, Type.Primitive>] extends [true] ? T :
        [Trait.Has<T, Type.Plain>] extends [true] ? One.Plain<T, TMode> : T
    );

    export type Plain<T, TMode> = (
        (One.PlainRequired<T> & One.PlainOptional<T>) extends infer TOne ? {
            [K in keyof TOne]: TMode extends { shallow: true } ? TOne[K] : One.Hybrid<TOne[K], TMode>;
        } : never
    )

    export type PlainRequired<T> = {
        [K in $ZuordUtil.Keys.Required<T>]: T[K]
    };

    export type PlainOptional<T> = {
        [K in $ZuordUtil.Keys.Optional<T>]?: T[K]
    };
}