import { ZuordTrait } from ".";

export namespace Has {
    export type Base<TSource, TBase> = true extends (TSource extends any ? ZuordTrait.Is.Base<TSource, TBase> : never) ? true : false;

    export type Any<TSources, TBase> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Has.Base<TSource, TBase>] extends [true] ? true : Has.Any<TSourceRest, TBase>
    ) : false;
}