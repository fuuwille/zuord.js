import { $ZuordTrait } from "../internal";

export namespace Is {
    export type Base<TSource extends unknown, TBase extends unknown> = $ZuordTrait.Is.Base<TSource, TBase>;

    export type Any<TSources extends unknown[], TBase extends unknown> = $ZuordTrait.Is.Any<TSources, TBase>;

    export type Every<TSources extends unknown[], TBase extends unknown> = $ZuordTrait.Is.Every<TSources, TBase>;
}