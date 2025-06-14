export type ZuordNormalize<T> = T extends object
    ? { [K in keyof T]: ZuordNormalize<T[K]> }
    : T;

export default ZuordNormalize;