type IsKey<T, K> = K extends keyof T ? true : false;

type HasKey<T, K> = true extends (K extends keyof T ? true : false) ? true : false;

type AnyHasKey<U extends readonly unknown[], K> = U extends readonly [unknown[]] ? true : ([HasKey<U[number], K>] extends [true] ? true : false);

export type { IsKey as ZuordIsKey };
export type { HasKey as ZuordHasKey };
export type { AnyHasKey as ZuordAnyHasKey };
