import { ZuordArray } from "@zuord/type";

export namespace Is {
    export type Base<TSource, TBase> = [TSource] extends [TBase] ? (
        [TSource] extends [never] ? ([TBase] extends [never] ? true : false) : true
    ) : false;

    export type Any<TSources, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
        [Is.Base<TSource, TBase>] extends [true] ? true : Is.Any<TRestSources, TBase>
    ) : false;

    export type Every<TSources, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
        [Is.Base<TSource, TBase>] extends [true] ? (TRestSources extends ZuordArray.Empty ? true : Is.Every<TRestSources, TBase>) : false
    ) : false;
}