export type ZuornUtilPartial<T> = {
    [K in keyof T]?: T[K] extends object ? ZuornUtilPartial<T[K]> : T[K];
};

export default ZuornUtilPartial;