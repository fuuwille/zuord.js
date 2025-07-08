type Eq<T1, T2> = (<T>() => T extends T1 ? 0 : 1) extends (<T>() => T extends T2 ? 0 : 1) ? true : false;

export type { Eq as ZuordEq };