type IsObject<T> = T extends Function ? false
  : T extends Array<unknown> ? false
  : T extends object ? true : false;

export type { IsObject as ZuordIsObject }