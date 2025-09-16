import type { $ZuordUtil } from "..";
import type { FundType } from "@zuord/type";
import type { ZuordCore } from "@zuord/core";
import type { ZuordTrait } from "@zuord/trait";

export type ResolveAll<T, TMode extends ZuordCore.ModeRecord> = 
[T, ZuordCore.ModeResolve<[TMode, { "$one.all": true }]>] extends [infer TPlain extends FundType.Plain, infer THybridMode extends ZuordCore.ModeRecord] ? (
    (ResolveRequired<TPlain, THybridMode> & ResolveOptional<TPlain, THybridMode>) extends infer TInfer ? ({
        [K in keyof TInfer]: ResolveAll<TInfer[K], TMode>;
    }) : never
) : T;

export type ResolveRequired<T, TMode extends ZuordCore.ModeRecord> = [ZuordTrait.Is.Base<T, FundType.Plain>] extends [true] ? {
    [K in $ZuordUtil.Keys.Required<T>]: (
        [TMode] extends [{ "$one.all": true }] ? (
            ResolveAll<T[K], TMode>
        ) : ResolveRequired<T[K], TMode>
    )
} : T;

export type ResolveOptional<T, TMode extends ZuordCore.ModeRecord> = [ZuordTrait.Is.Base<T, FundType.Plain>] extends [true] ? {
    [K in $ZuordUtil.Keys.Optional<T>]?: T extends any ? (
        K extends keyof T ? (
            [TMode] extends [{ "$one.all": true }] ? (
                ResolveAll<T[K], TMode>
            ) : ResolveOptional<T[K], TMode>
        ) : never
    ) : never
} : T;