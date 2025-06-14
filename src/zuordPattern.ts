export type ZuordPattern<T> = 
    T extends Array<unknown> ? true
    : T extends object
        ? { [K in keyof T]: ZuordPattern<T[K]> }
        : true;