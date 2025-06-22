type IsKey<T, K> = K extends keyof T ? true : false;

type HasKey<T, K> = true extends (K extends keyof T ? true : false) ? true : false;

export type { IsKey as ZuordIsKey };
export type { HasKey as ZuordHasKey };