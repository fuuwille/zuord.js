export type Tuple<TItem extends unknown = unknown> = readonly [] | readonly [TItem] | readonly [TItem, ...TItem[]];

export type TupleFirst<TFirst extends unknown = unknown, TRest extends unknown[] = unknown[]> = readonly [TFirst, ...TRest];

export type TupleLast<TLast extends unknown = unknown, TRest extends unknown[] = unknown[]> = readonly [...TRest, TLast];

export type TupleNest<TItem extends unknown = unknown> = readonly [TItem] | [TItem, ...[TItem, ...TItem[]]];