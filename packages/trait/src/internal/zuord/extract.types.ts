import { $ZuordTrait } from ".";

export declare namespace Extract {
    export type Is<TSource, TBase> = TSource extends any ? (
        [$ZuordTrait.Is.Base<TSource, TBase>] extends [true] ? TSource : never
    ) : never;
}