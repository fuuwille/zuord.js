import { ZuordTrait } from ".";

export namespace Has {
    export type Base<TSource, TBase> = true extends (TSource extends any ? ZuordTrait.Is.Base<TSource, TBase> : never) ? true : false;
}