export type First<TFirst extends unknown = unknown, TRest extends unknown[] = unknown[]> = readonly [TFirst, ...TRest];

export type Last<TLast extends unknown = unknown, TRest extends unknown[] = unknown[]> = readonly [...TRest, TLast];

export type Nest<TItem extends unknown = unknown> = readonly [TItem] | [TItem, ...[TItem, ...TItem[]]];