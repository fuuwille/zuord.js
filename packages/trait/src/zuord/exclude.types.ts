import { $ZuordTrait } from "@zuord/trait/internal";

export declare namespace Exclude {
    export type Is<TSource extends unknown, TExcluded extends unknown> = $ZuordTrait.Exclude.Is<TSource, TExcluded>;

    export type IsEach<TSource extends unknown, TExcludes extends unknown[]> = $ZuordTrait.Exclude.IsEach<TSource, TExcludes>;
}