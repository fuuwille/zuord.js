type IsObject<T> = [T] extends [object] ? true : false;

export type { IsObject as ZuordIsObject }