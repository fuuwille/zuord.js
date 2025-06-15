export type ZuordUtilPartial<T> = {
    [K in keyof T]?: T[K] extends object ? ZuordUtilPartial<T[K]> : T[K];
};