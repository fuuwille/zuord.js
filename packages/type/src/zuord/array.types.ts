export type Array<T extends unknown = unknown> = readonly T[];

export type ArrayNest<T extends unknown = unknown> = Array<Array<T>>;

export type ArrayEmpty = readonly [];