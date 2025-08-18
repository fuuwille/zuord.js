import { $ZuordTrait } from "@zuord/trait/internal";

export namespace Extract {
    export type Is<TSource extends unknown, TExtract extends unknown> = $ZuordTrait.Extract.Is<TSource, TExtract>;
}