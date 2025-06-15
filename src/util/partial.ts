type ZPartial<T> = {
    [K in keyof T]?: T[K] extends object ? ZPartial<T[K]> : T[K];
};

//

export type { ZPartial as ZuordPartial };