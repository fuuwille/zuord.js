export namespace Is {
    export type Base<TSource, TBase> = [TSource] extends [TBase] ? (
        [TSource] extends [never] ? ([TBase] extends [never] ? true : false) : true
    ) : false;
}