import type { $ZuordUtil } from "@zuord/util/internal";
import type { ZuordType } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";
import { ZuordTrait as Trait } from "@zuord/trait";

export namespace One {
    export type ResolveAll<T, TMode extends Core.Mode.Flags> = 
    [T, Core.Mode.Resolve<[TMode, { "$one.all": true }]>] extends [infer TPlain extends ZuordType.Plain, infer THybridMode extends Core.Mode.Flags] ? (
        (ResolveRequired<TPlain, THybridMode> & ResolveOptional<TPlain, THybridMode>) extends infer TInfer ? ({
            [K in keyof TInfer]: One.ResolveAll<TInfer[K], TMode>;
        }) : never
    ) : T;

    export type ResolveRequired<T, TMode extends Core.Mode.Flags> = [Trait.Is.Base<T, ZuordType.Plain>] extends [true] ? {
        [K in $ZuordUtil.Keys.Required<T>]: (
            [TMode ]extends [{ "$one.all": true }] ? (
                One.ResolveAll<T[K], TMode>
            ) : One.ResolveRequired<T[K], TMode>
        )
    } : T;

    export type ResolveOptional<T, TMode extends Core.Mode.Flags> = [Trait.Is.Base<T, ZuordType.Plain>] extends [true] ? {
        [K in $ZuordUtil.Keys.Optional<T>]?: T extends any ? (
            K extends keyof T ? (
                [TMode] extends [{ "$one.all": true }] ? (
                    One.ResolveAll<T[K], TMode>
                ) : One.ResolveOptional<T[K], TMode>
            ) : never
        ) : never
    } : T;
}