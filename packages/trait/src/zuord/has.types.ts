import { $ZuordTrait } from "@zuord/trait/internal";

export namespace Has {
    export type Base<TSource extends unknown, TBase extends unknown> = $ZuordTrait.Has.Base<TSource, TBase>;

    export type Any<TSources extends unknown[], TBase extends unknown> = $ZuordTrait.Has.Any<TSources, TBase>;

    export type Every<TSources extends unknown[], TBase extends unknown> = $ZuordTrait.Has.Every<TSources, TBase>;
}