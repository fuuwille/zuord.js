import { $ZuordTrait } from ".";

export declare namespace Exclude {
    export type Is<TSource, TBase> = TSource extends any ? (
        [$ZuordTrait.Is.Base<TSource, TBase>] extends [false] ? TSource : never
    ) : never;
}