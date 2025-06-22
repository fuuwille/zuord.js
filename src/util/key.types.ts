type IsKey<T, K> = K extends keyof T ? true : false;

type HasKey<T, K> = true extends (K extends keyof T ? true : false) ? true : false;

type AnyHasKey<U extends readonly unknown[], K> = [HasKey<U[number], K>] extends [true] ? true : false;

type AllHasKey<U extends readonly unknown[], K> = [HasKey<U[number], K>] extends [boolean] ? false : true;

export type { IsKey as ZuordIsKey };
export type { HasKey as ZuordHasKey };
export type { AnyHasKey as ZuordAnyHasKey };
export type { AllHasKey as ZuordAllHasKey };