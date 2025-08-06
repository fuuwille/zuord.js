import { ZuordType } from "@zuord/type";
import { $ZuordUtil } from ".";
import { ZuordTrait } from "@zuord/trait";

export namespace One {
    export type All<T> = ZuordTrait.Is<T, ZuordType.Plain> extends true ? (
        (ResolveRequired<T> & ResolveOptional<T>) extends infer TInfer ? ({
            [K in keyof TInfer]: All<TInfer[K]>;
        }) : never
    ) : T;

    export type ResolveRequired<T> = [T] extends [ZuordType.Plain] ? {
        [K in $ZuordUtil.Keys.Required<T>]: All<T[K]>
    } : T;

    export type ResolveOptional<T> = {
        [K in $ZuordUtil.Keys.Optional<T>]?: T extends any ? (
            K extends keyof T ? All<T[K]> : never
        ) : never
    };
}