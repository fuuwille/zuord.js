import { $ZuordTrait } from "../internal";

export namespace Is {
    export type Base<TSource extends unknown, TBase extends unknown> = $ZuordTrait.Is.Base<TSource, TBase>;

    export type Any<TSources extends unknown[], TBase extends unknown> = $ZuordTrait.Is.Any<TSources, TBase>;

    export type Every<TSources extends unknown[], TBase extends unknown> = $ZuordTrait.Is.Every<TSources, TBase>;

    export type Some<TSource extends unknown, TBases extends unknown[]> = $ZuordTrait.Is.Some<TSource, TBases>;

    export type Each<TSource extends unknown, TBases extends unknown[]> = $ZuordTrait.Is.Each<TSource, TBases>;

    export type AnySome<TSources extends unknown[], TBases extends unknown[]> = $ZuordTrait.Is.AnySome<TSources, TBases>;

    export type AnyEach<TSources extends unknown[], TBases extends unknown[]> = $ZuordTrait.Is.AnyEach<TSources, TBases>;

    export type EverySome<TSources extends unknown[], TBases extends unknown[]> = $ZuordTrait.Is.EverySome<TSources, TBases>;
}