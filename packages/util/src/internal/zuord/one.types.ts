import { $ZuordUtil as $Util } from ".";
import { ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";

export namespace One {
    export type ResolveAll<T, TMode extends Core.Mode.Field> = 
    [T, Core.Mode.Resolve<[TMode, { "$one.all": true }]>] extends [infer TPlain extends Type.Plain, infer THybridMode extends Core.Mode.Field] ? (
        (ResolveRequired<TPlain, THybridMode> & ResolveOptional<TPlain, THybridMode>) extends infer TInfer ? ({
            [K in keyof TInfer]: One.ResolveAll<TInfer[K], TMode>;
        }) : never
    ) : T;

    export type ResolveRequired<T, TMode extends Core.Mode.Field> = [T] extends [Type.Plain] ? {
        [K in $Util.Keys.Required<T>]: (
            [TMode ]extends [{ "$one.all": true }] ? (
                One.ResolveAll<T[K], TMode>
            ) : One.ResolveRequired<T[K], TMode>
        )
    } : T;

    export type ResolveOptional<T, TMode extends Core.Mode.Field> = {
        [K in $Util.Keys.Optional<T>]?: T extends any ? (
            K extends keyof T ? (
                [TMode] extends [{ "$one.all": true }] ? (
                    One.ResolveAll<T[K], TMode>
                ) : One.ResolveOptional<T[K], TMode>
            ) : never
        ) : never
    };
}