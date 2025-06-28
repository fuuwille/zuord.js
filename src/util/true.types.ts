type IsTrue<T> = [T] extends [true] ? true : false;

export type { IsTrue as ZuordIsTrue };