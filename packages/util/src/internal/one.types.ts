import type { $TypeUtil } from ".";
import type { FundType } from "@zuord/type";
import type { Zuord } from "zuord";
import type { TypeTrait } from "@zuord/trait";

export type ResolveAll<T, TMode extends Zuord.ModeRecord> = 
[T, Zuord.ModeResolve<[TMode, { "$one.all": true }]>] extends [infer TPlain extends FundType.Plain, infer THybridMode extends Zuord.ModeRecord] ? (
    (ResolveRequired<TPlain, THybridMode> & ResolveOptional<TPlain, THybridMode>) extends infer TInfer ? ({
        [K in keyof TInfer]: ResolveAll<TInfer[K], TMode>;
    }) : never
) : T;

export type ResolveRequired<T, TMode extends Zuord.ModeRecord> = [TypeTrait.Is.Base<T, FundType.Plain>] extends [true] ? {
    [K in $TypeUtil.Keys.Required<T>]: (
        [TMode] extends [{ "$one.all": true }] ? (
            ResolveAll<T[K], TMode>
        ) : ResolveRequired<T[K], TMode>
    )
} : T;

export type ResolveOptional<T, TMode extends Zuord.ModeRecord> = [TypeTrait.Is.Base<T, FundType.Plain>] extends [true] ? {
    [K in $TypeUtil.Keys.Optional<T>]?: T extends any ? (
        K extends keyof T ? (
            [TMode] extends [{ "$one.all": true }] ? (
                ResolveAll<T[K], TMode>
            ) : ResolveOptional<T[K], TMode>
        ) : never
    ) : never
} : T;