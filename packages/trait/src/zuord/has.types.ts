import { $ZuordTrait } from "@zuord/trait/internal";

export namespace Has {
    export type Base<TSource extends unknown, TBase extends unknown> = $ZuordTrait.Has.Base<TSource, TBase>;

    export type Any<TSources extends unknown[], TBase extends unknown> = $ZuordTrait.Has.Any<TSources, TBase>;

    export type Every<TSources extends unknown[], TBase extends unknown> = $ZuordTrait.Has.Every<TSources, TBase>;

    export type Some<TSource extends unknown, TBases extends unknown[]> = $ZuordTrait.Has.Some<TSource, TBases>;

    export type Each<TSource extends unknown, TBases extends unknown[]> = $ZuordTrait.Has.Each<TSource, TBases>;
}