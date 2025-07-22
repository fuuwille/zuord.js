export type RequiredOnly<T> = {
  [K in keyof T]-?: T[K] extends undefined ? false : T[K] extends boolean ? T[K] : false;
};