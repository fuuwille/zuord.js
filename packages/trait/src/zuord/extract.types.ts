import { $ZuordTrait } from "../internal";

export namespace Extract {
    export type Is<TSource extends unknown, TExtract extends unknown> = $ZuordTrait.Extract.Is<TSource, TExtract>;

    export type IsEach<TSource extends unknown, TExtracts extends unknown[]> = $ZuordTrait.Extract.IsEach<TSource, TExtracts>;

    export type Eq<TSource extends unknown, TExtract extends unknown> = $ZuordTrait.Extract.Eq<TSource, TExtract>;

    export type EqEach<TSource extends unknown, TExtracts extends unknown[]> = $ZuordTrait.Extract.EqEach<TSource, TExtracts>;
}