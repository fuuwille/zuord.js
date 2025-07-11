
// IS

type Is<TSource, TBase> = [TSource] extends [TBase] ? (
    [TSource] extends [never] ? ([TBase] extends [never] ? true : false) : true
) : false;

export type { Is as ZuordIs };