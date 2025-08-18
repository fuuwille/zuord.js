import { $ZuordTrait } from ".";
import { ZuordArray } from "@zuord/type";

export namespace Has {
    export type Base<TSource, TBase> = true extends (TSource extends any ? $ZuordTrait.Is.Base<TSource, TBase> : never) ? true : false;

    export type Any<TSources, TBase> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Has.Base<TSource, TBase>] extends [true] ? true : Has.Any<TSourceRest, TBase>
    ) : false;

    export type Every<TSources, TBase> = TSources extends [infer TSource, ...infer TSourceRest] ? (
        [Has.Base<TSource, TBase>] extends [true] ? (TSourceRest extends ZuordArray.Empty ? true : Has.Every<TSourceRest, TBase>) : false
    ) : false;
}