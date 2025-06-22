type IsKey<T, K> = K extends keyof T ? true : false;

export type { IsKey as ZuordIsKey };