import { $ZuordUtil as $Util } from ".";
import { ZuordType as Type } from "@zuord/type";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace One {
    export type All<T> = Trait.Is<T, Type.Plain> extends true ? (
        (ResolveRequired<T> & ResolveOptional<T>) extends infer TInfer ? ({
            [K in keyof TInfer]: One.All<TInfer[K]>;
        }) : never
    ) : T;

    export type ResolveRequired<T> = [T] extends [Type.Plain] ? {
        [K in $Util.Keys.Required<T>]: One.All<T[K]>
    } : T;

    export type ResolveOptional<T> = {
        [K in $Util.Keys.Optional<T>]?: T extends any ? (
            K extends keyof T ? One.All<T[K]> : never
        ) : never
    };
}