
// IS

type Is<TSource, TBase> = [TSource] extends [TBase] ? (
    [TSource] extends [never] ? ([TBase] extends [never] ? true : false) : true
) : false;

export type { Is as ZuordIs };


// IS ANY

type IsAny<TSources, TBase> = TSources extends [infer TSource, ...infer TRestSources] ? (
    [Is<TSource, TBase>] extends [true] ? true : IsAny<TRestSources, TBase>
) : false;

export type { IsAny as ZuordIsAny };