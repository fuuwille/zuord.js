import { $ZuordTrait } from "@zuord/trait/internal";

export namespace Extract {
    export type Is<TSource extends unknown, TExtract extends unknown> = $ZuordTrait.Extract.Is<TSource, TExtract>;

    export type IsEach<TSource extends unknown, TExtracts extends unknown[]> = $ZuordTrait.Extract.IsEach<TSource, TExtracts>;
}